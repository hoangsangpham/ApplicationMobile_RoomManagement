// Dịch vụ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListService from './ListService';
import AddService from './AddService';
import DetailService from './DetailService';

const Stack = createNativeStackNavigator();

function Service({ navigation }) {
  return (
  <Stack.Navigator>
  {/* <Stack.Screen options={{headerShown: false}} name="ListService" component={ListService} /> */}
  <Stack.Screen name="Dịch vụ" component={ListService} />
  <Stack.Screen name="Thêm dịch vụ" component={AddService} />
  <Stack.Screen name="Chi tiết dịch vụ" component={DetailService} />
</Stack.Navigator>
  )
}

export default Service;