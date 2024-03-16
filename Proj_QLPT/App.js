import * as React from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './pages/TabScreen';
// import AppNavigator from './pages/AppNavigator';
import LoginScreen from './pages/logins/LoginScreen';
import RegisterScreen from './pages/registers/RegisterScreen';
import ChangePassword from './pages/logins/ChangePassword';
// import RegisterScreen from './pages/RegisterScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import TrangChu from './pages/TrangChu';
// import DichVu from './pages/DichVu';
// import NguoiThue from './pages/NguoiThue';

const Stack = createNativeStackNavigator();

export default function App() {

  // React.useEffect(() => {
  //   // Load font khi component được tạo
  //   loadFont();
  // }, []);

  // const loadFont = async () => {
  //   try {
  //     await AsyncStorage.setItem('font_loaded', 'true');
  //   } catch (error) {
  //     console.log('Error loading font', error);
  //   }
  // };

  return (
    // <NavigationContainer>
    //   <LoginScreen></LoginScreen>
    //   {/* <TabScreen></TabScreen> */}
    //   {/* <AppNavigator></AppNavigator> */}
    //   {/* <HomeScreen></HomeScreen> */}
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} /> */}
      <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="TabScreen" component={TabScreen} />
      <Stack.Screen options={{headerShown: false}} name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword} />
      {/* <Stack.Screen name="DichVu" component={DichVu} />
      <Stack.Screen name="NguoiThue" component={NguoiThue} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});