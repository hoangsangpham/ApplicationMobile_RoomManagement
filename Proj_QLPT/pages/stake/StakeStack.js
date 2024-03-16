// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Stake from './Stake';

const Stack = createNativeStackNavigator();

function StakeStack({ navigation }) {
  return (
    <Stack.Navigator>
   
    <Stack.Screen name="Cọc giữ chỗ" component={Stake} />
   
  </Stack.Navigator>
  )
}

export default StakeStack;