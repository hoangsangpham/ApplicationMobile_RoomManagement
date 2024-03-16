import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as SQLite from 'expo-sqlite';
var db = SQLite.openDatabase('qlbhoa.db');


function Login(){
  const [tendangnhap, settendn] = useState('');
  const [matkhau, setmatkhau] = useState('');
  const [user, getuser] = useState({"user_id":0,"user_name":"abc","password":"333","emailaddress":"a@"});
  const Dangnhap=()=>{
    db.transaction((tx)=>{
      tx.executeSql(
        'SELECT * FROM table_user where user_name=? and password=?',
        [tendangnhap,matkhau],
        (tx, results) => {
          if (results.rows.length>0){
            AsyncStorage.setItem("user",JSON.stringify(results.rows.item(0)));
            getuser(results.rows.item(0));
            alert('Đăng nhập thành công');
          }
          else
          alert('Thông tin Đăng nhập sai');
        }
      );
  });
  }

  const saveValueFunction = () => {
    if (textInputValue) {
      AsyncStorage.setItem('tendangnhap', textInputValue);
      setTextInputValue('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const Layuser =()=>{
    AsyncStorage.getItem('user').then(
    (value)=>
      getuser(JSON.parse(value),)
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tên đăng nhập
        </Text>
        <TextInput
          placeholder="Nhập tên"
          value={tendangnhap}
          onChangeText={(data) => settendn(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <Text style={styles.titleText}>
          Mật khẩu
        </Text>
        <TextInput
          placeholder="Nhập mật khẩu"
          value={matkhau}
          onChangeText={(data) => setmatkhau(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={Dangnhap}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Layuser}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Lấy thông tin
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {user.user_name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default Login;