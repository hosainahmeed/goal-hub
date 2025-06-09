/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
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
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Goals') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Group') {
              iconName = focused ? 'account-group' : 'account-group-outline';
            } else if (route.name === 'Leaderboard') {
              iconName = focused ? 'trophy' : 'trophy';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }

            return <IconButton icon={iconName} size={size} color={color} />;
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
