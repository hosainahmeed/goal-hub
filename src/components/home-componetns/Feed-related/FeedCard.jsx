import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../../../styles/globalStyles';

function FeedCard({item}) {
  return (
    <View style={globalStyles.card}>
      <View style={styles.header}>
        <Image source={{uri: item?.userAvatar}} style={styles.avatar} />
        <Text style={styles.username}>{item?.username}</Text>
      </View>
      {item?.caption && <Text style={styles.caption}>{item?.caption}</Text>}
      {item?.image && (
        <Image source={{uri: item?.image}} style={styles.postImage} />
      )}
      <TouchableOpacity style={styles.likeButton}>
        <Icon name="favorite-border" size={24} color="#333" />
        {item?.likes > 0 && <Text style={styles.likeText}>{item?.likes}</Text>}
      </TouchableOpacity>
    </View>
  );
}

export default memo(FeedCard);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
  },
  caption: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingBottom: 12,
    lineHeight: 18,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  likeText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#333',
  },
});
