// Người thuê phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListRenter from './ListRenter';
import AddRenter from './AddRenter';
import DetailRenter from './DetailRenter';

const Stack = createNativeStackNavigator();

function Renter({navigation}) {
  return (
    <Stack.Navigator>
    {/* <Stack.Screen options={{headerShown: false}} name="ListService" component={ListService} /> */}
    <Stack.Screen name="Người thuê" component={ListRenter} />
    <Stack.Screen name="Thêm người thuê" component={AddRenter} />
    <Stack.Screen name="Chi tiết người thuê" component={DetailRenter} />
  </Stack.Navigator>
  );
};

export default Renter;