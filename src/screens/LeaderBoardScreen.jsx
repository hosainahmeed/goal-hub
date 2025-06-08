/* eslint-disable no-unused-vars */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LeaderBoardScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Text>LeaderBoardScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
