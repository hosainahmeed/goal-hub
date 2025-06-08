import React, {memo, useMemo} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoalCategories from '../components/GoalCategories/GoalCategories';
import UpcomingGoals from '../components/UpcomingGoals/UpcomingGoals';
import TodayPlannings from '../components/TodayPlannings/TodayPlannings';
import {globalStyles} from '../styles/globalStyles';
import HeaderWithSearch from '../components/Search/HeaderWithSearch';
import Card from '../components/home-componetns/Card';
function HomeScreen() {
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
    <SafeAreaView style={{...globalStyles.container}}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={components}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={globalStyles.gapMedium}
      />
    </SafeAreaView>
  );
}

export default memo(HomeScreen);
