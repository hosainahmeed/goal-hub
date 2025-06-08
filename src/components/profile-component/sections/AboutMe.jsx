import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import ProfileInfo from '../ProfileInfo';
import {globalStyles} from '../../../styles/globalStyles';

export default function AboutMe() {
  return (
    <ScrollView style={{...globalStyles.container, paddingHorizontal: 0}}>
      <ProfileInfo />
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.content}>
        Here you can add information about yourself...
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
});
