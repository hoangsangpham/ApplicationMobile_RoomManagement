// Phòng trọ
import React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Problem from './Problem';
import AddProblem from './AddProblem';


const Stack = createNativeStackNavigator();

function ProblemStack({navigation}) {
  return (
    <Stack.Navigator>
    {/* <Stack.Screen options={{headerShown: false}} name="ListService" component={ListService} /> */}
    <Stack.Screen name="Sự cố" component={Problem} />
    <Stack.Screen name="Thêm sự cố" component={AddProblem} />
    
  </Stack.Navigator>
  )
}

export default ProblemStack;