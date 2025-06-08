// TodayPlannings.js
import React, {memo, useState, useCallback} from 'react';
import {FlatList, View, Image, TouchableOpacity} from 'react-native';
import {globalStyles, colors, typography} from '../../styles/globalStyles';
import { Text } from 'react-native-paper';

const initialPlans = [
  {
    id: '1',
    icon: 'https://img.icons8.com/ios-filled/50/alarm.png',
    title: 'Wake Up',
    time: 'At 6:30am',
    done: false,
  },
  {
    id: '2',
    icon: 'https://img.icons8.com/ios-filled/50/dumbbell.png',
    title: 'Hit the Gym',
    time: 'Today at 6:00 PM',
    done: false,
  },
  {
    id: '3',
    icon: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
    title: 'Read a Book',
    time: 'each day',
    done: false,
  },
];

const PlanningCard = memo(({icon, title, time, done, onToggle}) => (
  <View style={[globalStyles.card, styles.card]}>
    <TouchableOpacity activeOpacity={0.8} style={styles.checkbox} onPress={onToggle}>
      {done && <View style={styles.checkedMark} />}
    </TouchableOpacity>

    <View style={globalStyles.iconWrapper}>
      <Image source={{uri: icon}} style={styles.icon} />
    </View>
    <View style={styles.textWrapper}>
      <Text style={[typography.body, done && styles.doneText]}>{title}</Text>
      <Text style={[typography.caption, done && styles.doneText]}>{time}</Text>
    </View>
  </View>
));

function TodayPlannings() {
  const [plans, setPlans] = useState(initialPlans);

  const toggleCheck = useCallback(id => {
    setPlans(prev =>
      prev.map(plan => (plan.id === id ? {...plan, done: !plan.done} : plan)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[typography.heading2, styles.heading]}>
        Today's Planning
      </Text>
      <Text style={[typography.caption, styles.subheading]}>
        You have {plans.length} actions to do
      </Text>
      <FlatList
        data={plans}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PlanningCard {...item} onToggle={() => toggleCheck(item.id)} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = {
  container: {
    marginTop: 16,
  },
  heading: {
    marginBottom: 4,
  },
  subheading: {
    color: colors.textSecondary,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedMark: {
    width: 12,
    height: 12,
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.textPrimary,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  listContent: {
    paddingTop: 10,
  },
};

export default memo(TodayPlannings);
