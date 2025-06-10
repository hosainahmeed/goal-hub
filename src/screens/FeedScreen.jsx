/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderBar from '../components/Share/HeaderBar';
import {globalStyles, imgaeUpload} from '../styles/globalStyles';

const CreateFeedScreen = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({mediaType: 'photo', quality: 0.8}, res => {
      if (res.assets?.[0]?.uri) {
        setImage(res.assets[0].uri);
      } else if (res.errorCode) {
        Alert.alert('Error', res.errorMessage || 'Image selection failed');
      }
    });
  };

  const post = async () => {
    if (!caption.trim() && !image) {
      Alert.alert('Post Required', 'Add a photo or a caption');
      return;
    }
    console.log(caption, image);
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    Alert.alert('Posted!', 'Your post was successfully shared.');
    setCaption('');
    setImage(null);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderBar pageName="Create Feed" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Choice image</Text>

        <View style={styles.imageRow}>
          {image ? (
            <View style={imgaeUpload.previewContainer}>
              <TouchableOpacity
                onPress={() => setImage(null)}
                style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image source={{uri: image}} style={imgaeUpload.previewImage} />
            </View>
          ) : (
            <TouchableOpacity style={imgaeUpload.uploadBox} onPress={pickImage}>
              <Text style={imgaeUpload.uploadText}>+</Text>
              <Text style={imgaeUpload.uploadLabel}>Upload</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.captionLabel}>Caption</Text>
        <TextInput
          placeholder="Write a caption..."
          placeholderTextColor="#888"
          style={styles.captionInput}
          multiline
          value={caption}
          onChangeText={setCaption}
        />

        <TouchableOpacity
          style={[styles.postButton, !caption && !image && {opacity: 0.5}]}
          onPress={post}
          disabled={loading || (!caption && !image)}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.postButtonText}>Post</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  captionLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  captionInput: {
    minHeight: 120,
    maxHeight: 200,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#000',
    marginBottom: 24,
  },
  postButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 32,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CreateFeedScreen;
