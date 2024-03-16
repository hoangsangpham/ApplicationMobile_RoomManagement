// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bill from './Bill';

const Stack = createNativeStackNavigator();

function BillStack({ navigation }) {
  return (
    <Stack.Navigator>
   
    <Stack.Screen name="Hóa đơn" component={Bill} />
   
  </Stack.Navigator>
  )
}

export default BillStack;