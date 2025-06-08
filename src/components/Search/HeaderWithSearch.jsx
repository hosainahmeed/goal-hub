// HeaderWithSearch.js
import React, {memo} from 'react';
import {View, TouchableOpacity, TextInput, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, typography} from '../../styles/globalStyles';

const HeaderWithSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Search Bar */}
      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Search')}>
        <Image
          source={require('../../assets/search-icons.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={colors.textSecondary}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {/* Notification Icon */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Notification')}
        style={styles.notificationButton}>
        <Image
          source={require('../../assets/notification-icon.png')}
          style={styles.notificationIcon}
        />
        {/* Optional badge for notifications count */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 12,
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
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    tintColor: colors.textPrimary,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    ...typography.small,
    color: colors.background,
    fontWeight: 'bold',
  },
};

export default memo(HeaderWithSearch);
