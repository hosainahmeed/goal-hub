/* eslint-disable react-native/no-inline-styles */
// UpcomingGoals.js
import React, {memo} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {globalStyles, colors, typography} from '../../styles/globalStyles';

function UpcomingGoals() {
  return (
    <View style={styles.container}>
      <Text style={[typography.heading2, styles.heading]}>Upcoming Goal</Text>

      <View style={[globalStyles.card, styles.card]}>
        <View
          style={{
            ...globalStyles.iconWrapper,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
            }}
            style={styles.icon}
          />
        </View>

        <View style={styles.content}>
          <View style={[globalStyles.row, styles.titleRow]}>
            <Text style={[typography.body, styles.title]}>
              Creative Writers
            </Text>
            <Text style={[typography.caption, styles.memberText]}>
              (3k members)
            </Text>
          </View>

          <Text style={[typography.caption, styles.description]}>
            A group for those who love starting the day with a refreshing run.
          </Text>

          <View style={[globalStyles.row, globalStyles.gapSmall]}>
            <TouchableOpacity
              style={[globalStyles.button, globalStyles.buttonSecondary]}>
              <Text
                style={[globalStyles.buttonText, globalStyles.buttonTextDark]}>
                Join challenges
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[globalStyles.button, globalStyles.buttonSuccess]}>
              <Text
                style={[globalStyles.buttonText, globalStyles.buttonTextLight]}>
                Leave
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[typography.small, styles.groupTag]}>Public groups</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 16,
  },
  heading: {
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#e5f0ff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: colors.textPrimary,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  titleRow: {
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  title: {
    marginRight: 8,
  },
  memberText: {
    color: colors.textSecondary,
  },
  description: {
    marginTop: 4,
    marginBottom: 10,
  },
  groupTag: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
};

export default memo(UpcomingGoals);
