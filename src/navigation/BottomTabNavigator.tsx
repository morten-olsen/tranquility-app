/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';
import TodayScreen from 'screens/Today';
import MoreScreen from 'screens/More';
import MemberListScreen from 'screens/members/List';
import DishListScreen from 'screens/dish/List';
import AppointmentListScreen from 'screens/appointments/List';

export type BottomTabParamList = {
  Today: undefined;
  More: undefined;
};

export type TodayParamList = {
  TodayScreen: undefined;
};

export type MoreParamList = {
  MoreScreen: undefined;
  MemberListScreen: undefined;
  DishListScreen: undefined;
  AppointmentListScreen: undefined;
};

const BottomTab = createDrawerNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Today"
    >
      <BottomTab.Screen
        name="Today"
        component={TodayNavigator}
        options={{
          //tabBarIcon: ({ color }) => <TabBarIcon name="calendar-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreNavigator}
        options={{
          // tabBarIcon: ({ color }) => <TabBarIcon name="ellipsis-horizontal-circle" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TodayStack = createStackNavigator<TodayParamList>();

function TodayNavigator() {
  return (
    <TodayStack.Navigator screenOptions={{ headerShown: false }}>
      <TodayStack.Screen
        name="TodayScreen"
        component={TodayScreen}
        options={{ headerTitle: 'Today' }}
      />
    </TodayStack.Navigator>
  );
}

const MoreStack = createStackNavigator<MoreParamList>();

function MoreNavigator() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{ headerTitle: 'More' }}
      />
      <MoreStack.Screen
        name="DishListScreen"
        component={DishListScreen}
        options={{ headerTitle: 'Dishes' }}
      />
      <MoreStack.Screen
        name="MemberListScreen"
        component={MemberListScreen}
        options={{ headerTitle: 'Members' }}
      />
      <MoreStack.Screen
        name="AppointmentListScreen"
        component={AppointmentListScreen}
        options={{ headerTitle: 'Appointments' }}
      />
    </MoreStack.Navigator>
  );
}
