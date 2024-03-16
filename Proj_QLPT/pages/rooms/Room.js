// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListRoom from './ListRoom';
import AddRoom from './AddRoom';
import DetailRoom from './DetailRoom';

const Stack = createNativeStackNavigator();

function Room({navigation}) {
  return (
    <Stack.Navigator>
    {/* <Stack.Screen options={{headerShown: false}} name="ListService" component={ListService} /> */}
    <Stack.Screen name="Phòng" component={ListRoom} />
    <Stack.Screen name="Thêm phòng" component={AddRoom} />
    <Stack.Screen name="Chi tiết phòng" component={DetailRoom} />
  </Stack.Navigator>
  )
}

export default Room;