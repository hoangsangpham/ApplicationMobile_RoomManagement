// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Instruct from './Instruct';

const Stack = createNativeStackNavigator();

function InstructStack({ navigation }) {
  return (
    <Stack.Navigator>
   
    <Stack.Screen name="Hướng dẫn" component={Instruct} />
   
  </Stack.Navigator>
  )
}

export default InstructStack;