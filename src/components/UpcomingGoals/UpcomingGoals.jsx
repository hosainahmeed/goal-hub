import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

function UpcomingGoals() {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Upcoming Goal</Text>

      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/open-book--v2.png',
            }}
            style={styles.icon}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Creative Writers </Text>
            <Text style={styles.memberText}>(3k members)</Text>
          </View>

          <Text style={styles.description}>
            A group for those who love starting the day with a refreshing run.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinText}>Join challenges</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leaveButton}>
              <Text style={styles.leaveText}>Leave</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.groupTag}>Public groups</Text>
      </View>
    </SafeAreaView>
  );
}
export default memo(UpcomingGoals);

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#e5f0ff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-center',
    position: 'relative',
  },
  iconWrapper: {
    backgroundColor: '#fff',
    height: 'fit-content',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#000',
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  memberText: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  joinButton: {
    backgroundColor: '#facc15',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  joinText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  leaveButton: {
    backgroundColor: '#10b981',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  leaveText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
  },
  groupTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 12,
    color: '#6b7280',
  },
});
