/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GoalScreen from '../screens/GoalScreen';
import GroupScreen from '../screens/GroupScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutMe from '../components/profile-component/sections/AboutMe';
import Chat from '../components/profile-component/sections/Chat';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from '../screens/SearchScreen';
import FeedScreen from '../screens/FeedScreen';
import {globalStyles} from '../styles/globalStyles';
const ProfileStack = createNativeStackNavigator();
const GroupStack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Notification" component={NotificationScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="CreateFeed" component={FeedScreen} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen name="about-me" component={AboutMe} />
      <ProfileStack.Screen name="chat" component={Chat} />
    </ProfileStack.Navigator>
  );
}

function GroupStackScreen() {
  return (
    <GroupStack.Navigator screenOptions={{headerShown: false}}>
      <GroupStack.Screen name="GroupMain" component={GroupScreen} />
      <GroupStack.Screen name="chat" component={Chat} />
    </GroupStack.Navigator>
  );
}

export default function Root() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/home-active.png')}
                />
              ) : (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/home.png')}
                />
              );
            } else if (route.name === 'Goals') {
              iconName = focused ? (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/goal-active.png')}
                />
              ) : (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/goal.png')}
                />
              );
            } else if (route.name === 'Group') {
              iconName = focused ? (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/group-active.png')}
                />
              ) : (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/group.png')}
                />
              );
            } else if (route.name === 'Leaderboard') {
              iconName = focused ? (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/leaderboard-active.png')}
                />
              ) : (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/leaderboard.png')}
                />
              );
            } else if (route.name === 'Profile') {
              iconName = focused ? (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/profile-active.png')}
                />
              ) : (
                <Image
                  style={globalStyles.icon}
                  source={require('../assets/bottom-bar-icons/profile.png')}
                />
              );
            }

            return iconName;
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="Goals"
          options={{headerShown: false}}
          component={GoalScreen}
        />
        <Tab.Screen
          name="Group"
          component={GroupStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Leaderboard"
          options={{headerShown: false}}
          component={LeaderBoardScreen}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
