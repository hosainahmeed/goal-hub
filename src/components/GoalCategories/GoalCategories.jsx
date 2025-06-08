import React, {memo} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

function GoalCategories() {
  const categories = [
    {
      img: 'https://img.icons8.com/ios-filled/50/heart-with-pulse.png',
      title: 'Health',
    },
    {
      img: 'https://img.icons8.com/ios-filled/50/spinner-frame-6.png',
      title: 'Life Style',
    },
    {
      img: 'https://img.icons8.com/ios-filled/50/combo-chart--v1.png',
      title: 'Finance',
    },
    {
      img: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
      title: 'Learning',
    },
    {
      img: 'https://img.icons8.com/ios-filled/50/medal.png',
      title: 'Career',
    },
    {
      img: 'https://img.icons8.com/ios-filled/50/heart-with-pulse.png',
      title: 'Health',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Goal Categories</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          contentContainerStyle={styles.flatList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CategoryCard {...item} />}
        />
      </View>
    </SafeAreaView>
  );
}
export default memo(GoalCategories);
const CategoryCard = ({img, title}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Image source={{uri: img}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  flatList: {
    marginBottom: 16,
    paddingLeft: 16,
    gap: 16,
  },
  card: {
    alignItems: 'center',
    marginRight: 16,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: '#333',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});
