import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import Message from './messages/Message';
import Manage from './manages/Manage';
import Room from './rooms/Room';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} 
          options={{
            tabBarLabel:'Trang chủ',
            tabBarIcon:()=>(
              <FontAwesome name="home" size={24} color="green" />
            ),
          }}
        />
        <Tab.Screen name="Room" component={Room} 
          options={{
            tabBarLabel:'Phòng',
            tabBarIcon:()=>(
              <MaterialIcons name="apartment" size={24} color="green" />
            ),
          }}
        />
        <Tab.Screen name="Message" component={Message} 
          options={{
            tabBarLabel:'Tin nhắn',
            tabBarIcon:()=>(
              <MaterialCommunityIcons name="message-processing-outline" size={24} color="green" />
              
            ),
          }}
        />
        <Tab.Screen name="Manage" component={Manage} 
          options={{
            tabBarLabel:'Quản lý',
            tabBarIcon:()=>(
              <Octicons name="people" size={24} color="green" />
            ),
          }}
        />
      </Tab.Navigator>
  )
}

export default TabScreen