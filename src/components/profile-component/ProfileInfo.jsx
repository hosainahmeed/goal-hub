/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {launchImageLibrary} from 'react-native-image-picker';

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
  const [profileImage, setProfileImage] = useState({
    uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
  });

  const selectImage = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Failed to select image');
      } else if (response.assets && response.assets[0].uri) {
        const source = {uri: response.assets[0].uri};
        setProfileImage(source);

        // If you need the file object for upload
        const imageFile = response.assets[0];
        console.log('Selected image file:', imageFile);

        // Here you would typically upload the image to your server
        // uploadImage(imageFile);
      }
    });
  };

  return (
    <View style={{...globalStyles.container, paddingHorizontal: 0}}>
      {/* Profile Image with Touchable for upload */}
      <TouchableOpacity
        style={styles.profileImageContainer}
        onPress={selectImage}
        activeOpacity={0.8}>
        <Image
          source={profileImage}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.uploadOverlay}>
          <Text style={styles.uploadText}>Change Photo</Text>
        </View>
      </TouchableOpacity>

      {/* Rest of the profile info remains the same */}
      <View style={globalStyles.card}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Pixel Posse</Text>
          <View style={styles.verifiedBadge}>
            <Text style={globalStyles.checkmark}>✓</Text>
          </View>
          <TouchableOpacity onPress={() =>Alert.alert('Sign out')} activeOpacity={0.8} style={styles.signOutButton}>
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
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: 300,
  },
  uploadOverlay: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  uploadText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 16,
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
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 71, 87, 0.1)',
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
    paddingHorizontal: 16,
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
    textAlign: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  statBox: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
