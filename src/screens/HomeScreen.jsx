/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GoalCategories from '../components/GoalCategories/GoalCategories';
import UpcomingGoals from '../components/UpcomingGoals/UpcomingGoals';
import TodayPlannings from '../components/TodayPlannings/TodayPlannings';
import {globalStyles} from '../styles/globalStyles';
import HeaderWithSearch from '../components/Search/HeaderWithSearch';
import Card from '../components/home-componetns/Card';
export default function HomeScreen() {
  const components = useMemo(
    () => [
      HeaderWithSearch,
      GoalCategories,
      UpcomingGoals,
      TodayPlannings,
      Card,
    ],
    [],
  );

  const renderItem = ({item: Component}) => (
    <View style={globalStyles.container}>
      <Component />
    </View>
  );

  return (
    <SafeAreaProvider style={{...globalStyles.container, marginTop: 16}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={components}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={globalStyles.gapMedium}
      />
    </SafeAreaProvider>
  );
}
