import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const {width, height} = Dimensions.get('window')
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; 
import API_URL from '../config';


function LoginScreen({ navigation }){
  const [tendangnhap, settendn] = useState('');
  const [matkhau, setmatkhau] = useState('');
  const [user, getuser] = useState({"username":"abc","password":"333","email":"a@"});
  const Dangnhap=async()=>{
    try {
      const response = await axios.get(
        API_URL+'/api/DangNhap/'+tendangnhap+'/'+matkhau,
      );
      if (response.data){
      getuser(response.data);
      AsyncStorage.setItem('user',JSON.stringify(response.data));
      Alert.alert(
        'Đăng nhập thành công',
        'Chuyển đến giao diện quản lý',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              // Chuyển đến giao diện TrangChu khi nhấn OK
              navigation.navigate('TabScreen',tendangnhap);
            },
          },
        ],
        { cancelable: false }
      );
      }
      else {
        Alert.alert('Thông tin đăng nhập sai');
      }

      } catch(error){
          // alert(error.message);
          Alert.alert('Vui lòng nhập đầy đủ tên và mật khẩu');
          settendn('');
          setmatkhau('');
      }
      
  }


  // const Layuser =()=>{
  //   AsyncStorage.getItem('user').then(
  //   (value)=>
  //     getuser(JSON.parse(value),)
  //   );
  // };

  return (
    <View style={styles.container}>
      <Ionicons name="md-home" size={70} color="#00613E" />
      <Text style={styles.subTitle}>Chào mừng bạn đến với</Text>
      <Text style={styles.titulo}>VinaHome</Text>
      
      <TextInput 
       
        placeholder='Tài khoản'
        value={tendangnhap}
        onChangeText={(data) => settendn(data)}
        underlineColorAndroid="transparent"
        style={styles.textInput}
      >
      </TextInput>
      
      <TextInput 
        secureTextEntry={true}
        placeholder='Mật khẩu'
        value={matkhau}
        onChangeText={(data) => setmatkhau(data)}
        underlineColorAndroid="transparent"
        style={styles.textInput}
      />

      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ChangePassword')}>
        Bạn quên mật khẩu?
      </Text>

      <StatusBar style="auto" />
      {/* <ButtonGradient/> */}
      <TouchableOpacity
        onPress={Dangnhap}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>
        SIGN IN
        </Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('RegisterScreen')}>Bạn chưa có tài khoản?</Text>
      {/* <Text style={styles.forgotPassword}>
        Don't have an account?
      </Text> */}

      
      {/* <TouchableOpacity
        onPress={Layuser}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>
          Lấy thông tin
        </Text>
      </TouchableOpacity> */}
      {/* <Text style={styles.textStyle}>
        {user.user_name}
      </Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 40,
    color: '#34413C',
    fontWeight: 'bold',
    marginBottom: 30,

  },
  subTitle:{
    marginTop: 20,
    
    fontSize: 20,
    color: '#34413C',
  },
  forgotPassword:{
    marginTop: 15,
    fontSize: 15,
    color: 'gray',
    textAlign:'left',
    // textDecorationLine:'underline'
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
    marginTop: 100,
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

export default LoginScreen;