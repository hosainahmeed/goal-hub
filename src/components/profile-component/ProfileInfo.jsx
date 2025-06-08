/* eslint-disable react-native/no-inline-styles */
// ProfileInfo.js
import React, {memo} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const StatBox = memo(({label, value}) => (
  <View style={styles.statBox}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
));

const ContactItem = memo(({icon, text}) => (
  <View style={styles.contactItem}>
    <Text style={styles.contactIcon}>{icon}</Text>
    <Text style={styles.contactText}>{text}</Text>
  </View>
));

function ProfileInfo() {
  return (
    <View style={{...globalStyles.container, paddingHorizontal: 0}}>
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>

      {/* Profile Info Card */}
      <View style={globalStyles.card}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Pixel Posse</Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <TouchableOpacity style={styles.signOutButton}>
            <Text style={styles.signOutIcon}>↗</Text>
            <Text style={styles.signOutText}>Sign out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactInfo}>
          <ContactItem icon="✉" text="pixelposse@gmail.com" />
          <ContactItem icon="📞" text="075851948" />
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <StatBox label="Streak" value="7 days" />
          <StatBox label="Total Points" value="1,250 pts" />
        </View>
      </View>
    </View>
  );
}

export default memo(ProfileInfo);

const styles = StyleSheet.create({
  profileImageContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: 300,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    flex: 1,
  },
  verifiedBadge: {
    backgroundColor: '#1DA1F2',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutIcon: {
    fontSize: 16,
    color: '#ff4757',
    marginRight: 5,
  },
  signOutText: {
    color: '#ff4757',
    fontSize: 16,
    fontWeight: '500',
  },
  contactInfo: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactIcon: {
    fontSize: 16,
    marginRight: 12,
    width: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statBox: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
});
