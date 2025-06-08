import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function GoalScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Text>GoalScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
