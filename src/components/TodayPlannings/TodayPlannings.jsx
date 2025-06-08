/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

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
  {
    id: '4',
    icon: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
    title: 'Read a Book',
    time: 'each day',
    done: false,
  },
  {
    id: '5',
    icon: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
    title: 'Read a Book',
    time: 'each day',
    done: false,
  },
  {
    id: '6',
    icon: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
    title: 'Read a Book',
    time: 'each day',
    done: false,
  },
];

export default function TodayPlannings() {
  const [plans, setPlans] = useState(initialPlans);

  const toggleCheck = id => {
    setPlans(prev =>
      prev.map(plan => (plan.id === id ? {...plan, done: !plan.done} : plan)),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Today's Planning</Text>
        <Text style={styles.subheading}>
          You have {plans.length} actions to do
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={plans}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PlanningCard {...item} onToggle={() => toggleCheck(item.id)} />
          )}
          contentContainerStyle={{paddingTop: 10}}
        />
      </View>
    </SafeAreaView>
  );
}

const PlanningCard = ({icon, title, time, done, onToggle}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
        {done && <View style={styles.checkedMark} />}
      </TouchableOpacity>

      <View style={styles.iconWrapper}>
        <Image source={{uri: icon}} style={styles.icon} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, done && styles.doneText]}>{title}</Text>
        <Text style={[styles.time, done && styles.doneText]}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: '#555',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f7fe',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#3b82f6',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedMark: {
    width: 12,
    height: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
  iconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  time: {
    fontSize: 13,
    color: '#6b7280',
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
});
