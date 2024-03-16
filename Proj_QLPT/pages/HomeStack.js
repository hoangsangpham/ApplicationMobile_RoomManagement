import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Service from './services/Service';
import HomeScreen from './HomeScreen';
import Renter from './renters/Renter';
import Setting from './settings/Setting';
import LoginScreen from './logins/LoginScreen';
import ListUser from './logins/ListUser';
import AddService from './services/AddService';
import AddRenter from './renters/AddRenter';
import Room from './rooms/Room';
import Terms from './settings/Terms';
import ProblemStack from './problem/ProblemStack';
import BillStack from './bill/BillStack';
import ContractStack from './contract/ContractStack';
import PaybookStack from './paybook/PaybookStack';
import StakeStack from './stake/StakeStack';
import InstructStack from './instruct/InstructStack';
import Reset from './settings/Reset';
import Policy from './settings/Policy';



const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    // Ẩn tên tiêu đề và tiêu đề trong màn hình con
    // <Stack.Navigator screenOptions={{
    //   headerShown: false
    // }}>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="Service" component={Service} />
      <Stack.Screen options={{headerShown: false}} name="Renter" component={Renter} />
      <Stack.Screen options={{headerShown: false}} name="Room" component={Room} />
      <Stack.Screen options={{headerShown: false}} name="ProblemStack" component={ProblemStack} />
      <Stack.Screen name="Cài đặt" component={Setting} />
      <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Danh sách tài khoản" component={ListUser} />
      <Stack.Screen name="Điều khoản sử dụng" component={Terms} />
      <Stack.Screen name="Thêm dịch vụ" component={AddService} />
      <Stack.Screen name="Thêm người thuê" component={AddRenter} />
      <Stack.Screen options={{headerShown: false}} name="BillStack" component={BillStack} />
      <Stack.Screen options={{headerShown: false}} name="ContractStack" component={ContractStack} />
      <Stack.Screen options={{headerShown: false}} name="PaybookStack" component={PaybookStack} />
      <Stack.Screen options={{headerShown: false}} name="StakeStack" component={StakeStack} />
      <Stack.Screen options={{headerShown: false}} name="InstructStack" component={InstructStack} />
      <Stack.Screen name="Thay đổi mật khẩu" component={Reset} />
      <Stack.Screen name="Chính sách" component={Policy} />
    </Stack.Navigator>
  );
};


export default HomeStack;