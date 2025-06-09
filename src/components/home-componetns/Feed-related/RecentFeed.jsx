/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback, useState, useEffect, memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedCard from './FeedCard';
import FeedSkeleton from './FeedSkeleton';

const dummyData = [
  {
    id: '1',
    userAvatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000',
    username: 'john_doe',
    caption: 'This is a beautiful day! #nature #outdoors',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000',
    likes: 243,
  },
  {
    id: '2',
    userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    username: 'jane_doe',
    caption: 'Sunset vibes 🌅 #relax',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&q=60&w=3000',
    likes: 150,
  },
];

function RecentFeed() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = useCallback(
    ({item}) => (loading ? <FeedSkeleton key={item.id} /> : <FeedCard key={item.id} item={item} />),
    [loading],
  );

  const keyExtractor = useCallback(
    item => (loading ? item.id : item.id.toString()),
    [loading],
  );
  const skeletonData = Array(3).fill({id: Math.random().toString()});

  return (
    <FlatList
      data={loading ? skeletonData : data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View testID="separator" style={styles.separator} />}
    />
  );
}
export default memo(RecentFeed);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  separator: {
    height: 16,
  },
});
