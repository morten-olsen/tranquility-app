/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import TaskEdit from 'screens/tasks/Edit';
import MemberEdit from 'screens/members/Edit';
import DishEdit from 'screens/dish/Edit';
import AddDishToDayScreen from 'screens/day/AddDish';
import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export type RootStackParamList = {
  Root: undefined;
  TaskEdit: {
    id: string;
  };
  MemberEdit: {
    id: string;
  };
  DishEdit: {
    id: string;
  };
  AddDishToDay: {
    day: string;
  };
  NotFound: undefined;
};

const modalOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' && false ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="TaskEdit" options={modalOptions} component={TaskEdit} />
      <Stack.Screen name="MemberEdit" options={modalOptions} component={MemberEdit} />
      <Stack.Screen name="DishEdit" options={modalOptions} component={DishEdit} />
      <Stack.Screen name="AddDishToDay" options={modalOptions} component={AddDishToDayScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
