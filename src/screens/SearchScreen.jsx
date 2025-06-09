/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, memo} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {globalStyles, colors, typography} from '../styles/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const mockResults = [
    {id: '1', title: 'Fitness Challenge', type: 'Challenge'},
    {id: '2', title: 'Meditation Guide', type: 'Article'},
    {id: '3', title: 'Nutrition Plan', type: 'Plan'},
    {id: '4', title: 'Sleep Better', type: 'Challenge'},
    {id: '5', title: 'Morning Routine', type: 'Article'},
  ];

  const handleSearch = useCallback(() => {
    Keyboard.dismiss();
    const results = mockResults.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchQuery]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.resultItem}
      onPress={() => navigation.navigate('Detail', {item})}>
      <Text style={styles.resultTitle}>{item.title}</Text>
      <Text style={styles.resultType}>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.popToTop()}>
          <Image
            source={require('../assets/back-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/search-icons.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search challenges, articles..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            autoFocus={true}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSearchQuery('')}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Search Results */}
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
        />
      ) : (
        <View style={styles.emptyState}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyText}>
            Search for challenges or articles
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = {
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: colors.textPrimary,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: colors.textSecondary,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    ...typography.body,
    color: colors.textPrimary,
    padding: 0,
    includeFontPadding: false,
  },
  closeIcon: {
    width: 18,
    height: 18,
    tintColor: colors.textSecondary,
    marginLeft: 8,
  },
  resultsContainer: {
    padding: 16,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  resultTitle: {
    ...typography.body,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  resultType: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyIcon: {
    width: 120,
    height: 120,
    opacity: 0.5,
    marginBottom: 20,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
};

export default memo(SearchScreen);
