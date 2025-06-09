import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderBar from '../components/Share/HeaderBar';

function FeedScreen() {
  return (
    <SafeAreaView>
      <HeaderBar pageName={'Create Feed'} />
      <StatusBar barStyle="dark-content" />
      <Text>FeedScreen</Text>
    </SafeAreaView>
  );
}

export default memo(FeedScreen);

const styles = StyleSheet.create({});
