// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Paybook from './Paybook';

const Stack = createNativeStackNavigator();

function PaybookStack({ navigation }) {
  return (
    <Stack.Navigator>
   
    <Stack.Screen name="Sổ nợ" component={Paybook} />
   
  </Stack.Navigator>
  )
}

export default PaybookStack;