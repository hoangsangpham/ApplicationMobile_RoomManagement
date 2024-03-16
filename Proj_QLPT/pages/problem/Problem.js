import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';

import ListCompleteProblem from './ListCompleteProblem';
import ListRequestProblem from './ListRequestProblem';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]}>
    <ListRequestProblem/>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]}>
    <ListCompleteProblem/>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#098241' }}
  />
);

const Stack = createNativeStackNavigator();

const Problem = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Đang yêu cầu' },
    { key: 'second', title: 'Hoàn thành' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    
    <View style={{ flex: 1 }}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
    <View style={{ position: 'absolute', bottom: 60, right: 50 }}>
      <Ionicons
        name="add-circle"
        size={70}
        color="green"
        onPress={() => navigation.navigate('Thêm sự cố')}
      />
    </View>
  </View>
  
);
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Problem;