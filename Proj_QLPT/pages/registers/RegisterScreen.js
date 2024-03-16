import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const {width, height} = Dimensions.get('window')
import axios from 'axios';
import API_URL from '../config';

function RegisterScreen({ navigation })
{
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [emailaddress, setmailaddress] = useState('');
  const dangky = () => {
      if (!userName) {
          Alert.alert('Thông báo','Nhập vào tên');
          return;
      }
      if (!password) {
        Alert.alert('Thông báo','Nhập vào mật khẩu');
          return;
      }
      if (!emailaddress) {
        Alert.alert('Thông báo','Nhập vào địa chỉ email');
          return;
      }

      axios
      .post(API_URL+'/api/DangKy',{
          username: userName,
          password: password,
          email: emailaddress
      })
      .then(function (response){
          // alert(JSON.stringify(response.data));
          Alert.alert(
            'Đăng ký thành công',
            'Chuyển đến giao diện đăng nhập',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  // Chuyển đến giao diện đăng nhập khi nhấn OK
                  navigation.navigate('LoginScreen');
                },
              },
            ],
            { cancelable: false }
          );
      })
      .catch(function (error){
          // alert(error.message);
          Alert.alert('Thông báo','Đăng ký không thành công');
      })
    };
        return (

            <View style={styles.container}>
              <Text style={styles.subTitle}>Tạo tài khoản quản lý phòng trọ của bạn ngay nào</Text>
              <Text style={styles.titulo}>Đăng ký</Text>
              
              <TextInput 
                placeholder='Nhập tài khoản'
                value={userName}
                onChangeText={setUserName}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
              <TextInput 
                placeholder='Nhập mật khẩu'
                value={password}
                onChangeText={setpassword}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
            <TextInput 
                placeholder='Nhập Email'
                value={emailaddress}
                onChangeText={setmailaddress}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
              <Text style={styles.forgotPassword} onPress={() => navigation.navigate('LoginScreen')}>
              Bạn đã có tài khoản?
              </Text>
        
              <StatusBar style="auto" />
              {/* <ButtonGradient/> */}
              <TouchableOpacity
                onPress={dangky}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                  SIGN UP
                </Text>
              </TouchableOpacity>    
            </View>
          );
        


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',
    marginBottom: 30,

  },
  subTitle:{
    // padding: 30,
    // marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  },
  forgotPassword:{
    marginTop: 15,
    fontSize: 15,
    color: 'gray',
    textAlign:'left'
  },
  textInput: {
    // borderWidth: 1,
    // borderColor: 'gray',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30  ,
    backgroundColor: '#fff',
  },
  textStyle: {
    padding: 10,
    textAlign: 'right',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 60,
    minWidth: 100,
    borderRadius:50
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default RegisterScreen;