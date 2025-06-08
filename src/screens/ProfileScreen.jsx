import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ProfileInfo from '../components/profile-component/ProfileInfo';
import MenuItems from '../components/profile-component/MenuItems';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileInfo />
      <MenuItems />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
