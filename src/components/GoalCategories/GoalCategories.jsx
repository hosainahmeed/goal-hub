/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {globalStyles, colors, typography} from '../../styles/globalStyles';

const categories = [
  {
    id: '1',
    img: 'https://img.icons8.com/ios-filled/50/heart-with-pulse.png',
    title: 'Health',
  },
  {
    id: '2',
    img: 'https://img.icons8.com/ios-filled/50/spinner-frame-6.png',
    title: 'Life Style',
  },
  {
    id: '3',
    img: 'https://img.icons8.com/ios-filled/50/combo-chart--v1.png',
    title: 'Finance',
  },
  {
    id: '4',
    img: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
    title: 'Learning',
  },
  {
    id: '5',
    img: 'https://img.icons8.com/ios-filled/50/medal.png',
    title: 'Career',
  },
];

const CategoryCard = memo(({img, title}) => (
  <View style={styles.card}>
    <View style={{...globalStyles.iconWrapper, borderRadius: 50}}>
      <Image source={{uri: img}} style={styles.image} />
    </View>
    <Text style={[typography.caption, styles.title]}>{title}</Text>
  </View>
));

function GoalCategories() {
  return (
    <View style={styles.container}>
      <Text style={[typography.heading2, styles.heading]}>Goal Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={styles.flatList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryCard {...item} />}
      />
    </View>
  );
}

const styles = {
  container: {
    marginTop: 16,
  },
  heading: {
    marginBottom: 12,
  },
  flatList: {
    paddingLeft: 16,
    gap: 16,
  },
  card: {
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: colors.textPrimary,
  },
  title: {
    marginTop: 8,
    textAlign: 'center',
  },
};

export default memo(GoalCategories);
