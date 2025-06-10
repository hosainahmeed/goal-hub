/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderBar from '../components/Share/HeaderBar';
import {globalStyles} from '../styles/globalStyles';

export default function GoalScreen() {
  return (
    <SafeAreaView style={{...globalStyles.container, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" />
      <HeaderBar pageName="My Goals" />
      <View style={[globalStyles.row,globalStyles.spaceBetween]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            globalStyles.button,
            globalStyles.buttonPrimary,
            styles.goalItem,
            {
              backgroundColor: '#C4E1E6',
              borderColor: '#C4E1E6',
              borderWidth: 1,
            },
          ]}>
          <Text style={styles.goalTitle}>Goal Criteria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            globalStyles.button,
            globalStyles.buttonPrimary,
            styles.goalItem,
            {
              backgroundColor: '#D1D1D1',
              borderColor: '#D3D3D3',
              borderWidth: 1,
            }
          ]}>
          <Text style={styles.goalTitle}>+ Add new goal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    ...globalStyles.buttonText,
    ...globalStyles.textCenter,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
});
