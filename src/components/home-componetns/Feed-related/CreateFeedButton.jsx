import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

function CreateFeedButton() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateFeed')}
        style={styles.button}
        activeOpacity={0.8}>
        <Image
          style={styles.icon}
          source={require('../../../assets/feed-icon.png')}
        />
        <Text style={globalStyles.buttonText}>Create Feed</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(CreateFeedButton);

const styles = StyleSheet.create({
  button: {
    ...globalStyles.row,
    ...globalStyles.center,
    ...globalStyles.gapSmall,
    borderRadius: 4,
    padding: 8,
    borderColor: '#72727272',
    borderWidth: 1,
    backgroundColor: '#EBF4FF',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
