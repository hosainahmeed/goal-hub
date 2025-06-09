import {Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {globalStyles} from '../../../styles/globalStyles';

function IntroHeader() {
  return (
    <View style={{...globalStyles.container}}>
      <Image
        style={styles.image}
        source={require('../../../assets/home_header.png')}
      />
    </View>
  );
}
export default memo(IntroHeader);
const styles = StyleSheet.create({
  image: {
    width: '100%',
    objectFit: 'contain',
    height: 150,
  },
});
