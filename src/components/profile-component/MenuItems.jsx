// MenuItems.js
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';

const MenuItem = memo(({icon, label, onPress}) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={onPress}
    activeOpacity={0.7}>
    <View style={styles.menuLeft}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuText}>{label}</Text>
    </View>
    <Text style={styles.menuArrow}>›</Text>
  </TouchableOpacity>
));

function MenuItems() {
  const navigation = useNavigation();
  const menuItems = [
    {icon: '👤', label: 'About me', screen: 'about-me'},
    {icon: '💬', label: 'Chat', screen: 'chat'},
    {icon: '❤️', label: 'My Favorite', screen: 'favorites'},
    {icon: '📋', label: 'My Goal Posts', screen: 'goal-posts'},
    {icon: '🏆', label: 'Achievements', screen: 'achievements'},
    {icon: '⚙️', label: 'Settings', screen: 'settings'},
  ];

  return (
    <View>
      {menuItems.map((item, index) => (
        <MenuItem
          key={`menu-item-${index}`}
          icon={item.icon}
          label={item.label}
          onPress={() => navigation.navigate(item.screen)}
        />
      ))}
    </View>
  );
}

export default memo(MenuItems);

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 15,
    width: 25,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
    color: '#ccc',
  },
});
