/* eslint-disable no-unused-vars */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Card from '../components/home-componetns/Card';
import GoalCategories from '../components/GoalCategories/GoalCategories';
import UpcomingGoals from '../components/UpcomingGoals/UpcomingGoals';
import TodayPlannings from '../components/TodayPlannings/TodayPlannings';

export default function HomeScreen() {
  const homeScreenComponents = [
    <Card />,
    <GoalCategories />,
    <UpcomingGoals />,
    <TodayPlannings />,
    <Card />,
    <Card />,
  ];
  return (
    <SafeAreaProvider style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        data={homeScreenComponents}
        renderItem={({item}) => <View style={styles.flatList}>{item}</View>}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
    marginBottom: 16,
  },
});
