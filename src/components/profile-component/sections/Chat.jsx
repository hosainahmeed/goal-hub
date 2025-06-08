import {StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Chat() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Text>Chat</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
