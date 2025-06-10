import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {imgaeUpload} from '../../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddGoalModal({setModalVisible, onSubmit}) {
  const [image, setImage] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({mediaType: 'photo', quality: 0.8}, res => {
      if (res.assets?.[0]?.uri) {
        setImage(res.assets[0].uri);
      } else if (res.errorCode) {
        Alert.alert('Error', res.errorMessage || 'Image selection failed');
      }
    });
  };
  return (
    <SafeAreaView>
        <StatusBar barStyle="dark-content" />
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
          <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
            <Text style={imgaeUpload.uploadText}>+</Text>
            <Text style={imgaeUpload.uploadLabel}>Upload</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
