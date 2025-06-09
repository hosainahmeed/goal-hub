import React from 'react';
import {View, StyleSheet} from 'react-native';
import {globalStyles} from '../../../styles/globalStyles';
import ShimmerEffect from '../../Share/ShimmerEffect';

const FeedSkeleton = () => {
  return (
    <View style={globalStyles.card}>
      <View style={styles.header}>
        <ShimmerEffect>
          <View style={styles.avatarSkeleton} />
        </ShimmerEffect>
        <ShimmerEffect>
          <View style={styles.usernameSkeleton} />
        </ShimmerEffect>
      </View>
      <ShimmerEffect>
        <View style={styles.captionSkeleton} />
      </ShimmerEffect>
      <ShimmerEffect>
        <View style={styles.imageSkeleton} />
      </ShimmerEffect>
      <ShimmerEffect>
        <View style={styles.likeButtonSkeleton} />
      </ShimmerEffect>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatarSkeleton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#e1e1e1',
  },
  usernameSkeleton: {
    width: 100,
    height: 14,
    backgroundColor: '#e1e1e1',
    borderRadius: 4,
  },
  captionSkeleton: {
    height: 16,
    backgroundColor: '#e1e1e1',
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  imageSkeleton: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#e1e1e1',
  },
  likeButtonSkeleton: {
    height: 24,
    backgroundColor: '#e1e1e1',
    margin: 12,
    borderRadius: 4,
    width: 60,
  },
});

export default FeedSkeleton;
