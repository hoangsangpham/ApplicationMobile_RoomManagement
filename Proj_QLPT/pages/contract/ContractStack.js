// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contract from './Contract';

const Stack = createNativeStackNavigator();

function ContractStack({ navigation }) {
  return (
    <Stack.Navigator>
   
    <Stack.Screen name="Hợp đồng" component={Contract} />
   
  </Stack.Navigator>
  )
}

export default ContractStack;