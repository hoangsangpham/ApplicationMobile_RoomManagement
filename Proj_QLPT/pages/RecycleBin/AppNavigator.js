// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DichVu from '../DichVu';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DV">
      <Stack.Screen name="DichVu" component={DichVu} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
