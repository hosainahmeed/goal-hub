import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {globalStyles, colors, typography} from '../styles/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const notifications = [
    {
      id: '1',
      title: 'New Challenge Available',
      message: 'Join the 30-day fitness challenge starting tomorrow',
      time: '2 hours ago',
      read: false,
      type: 'challenge',
    },
    {
      id: '2',
      title: 'Reminder',
      message: 'Your meditation session starts in 15 minutes',
      time: '5 hours ago',
      read: true,
      type: 'reminder',
    },
    {
      id: '3',
      title: 'Achievement Unlocked',
      message: 'You completed 7 days of morning routine!',
      time: '1 day ago',
      read: true,
      type: 'achievement',
    },
    {
      id: '4',
      title: 'New Article',
      message: 'Check out our new article on sleep hygiene',
      time: '2 days ago',
      read: true,
      type: 'article',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.notificationItem, !item.read && styles.unreadItem]}
      onPress={() =>
        navigation.navigate('NotificationDetail', {notification: item})
      }>
      <Image
        source={getNotificationIcon(item.type)}
        style={styles.notificationIcon}
      />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.unreadBadge} />}
    </TouchableOpacity>
  );

  const getNotificationIcon = type => {
    switch (type) {
      case 'challenge':
        return require('../assets/logo.png');
      case 'reminder':
        return require('../assets/logo.png');
      case 'achievement':
        return require('../assets/logo.png');
      default:
        return require('../assets/logo.png');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Notification Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.popToTop();
          }}>
          <Image
            source={require('../assets/home-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyText}>No notifications yet</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: colors.textPrimary,
  },
  headerTitle: {
    ...typography.heading2,
    color: colors.textPrimary,
  },
  listContainer: {
    paddingBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
  },
  unreadItem: {
    backgroundColor: '#f5f9ff',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  notificationMessage: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  notificationTime: {
    ...typography.small,
    color: colors.textSecondary,
  },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    alignSelf: 'center',
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

export default NotificationScreen;
