import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const {width, height} = Dimensions.get('window')
import axios from 'axios';
import API_URL from '../config';

function AddService({ navigation })
{
        const [service_name, setservice_name] = useState('');
        const [service_charge, setservice_charge] = useState('');
        const [service_unit, setservice_unit] = useState('');
        const [service_describe, setservice_describe] = useState('');
        
        const themdv = () => {
          if (!service_name) {
            Alert.alert('Thông báo','Nhập vào tên dịch vụ');
              return;
          }
          if (!service_charge) {
            Alert.alert('Thông báo','Nhập vào phí dịch vụ');
              return;
          }
          if (!service_unit) {
            Alert.alert('Thông báo','Nhập vào đơn vị tính');
            return;
        }
          if (!service_describe) {
              alert('Nhập vào mô tả');
              return;
          }
    
          axios
          .post(API_URL+'/api/AddService',{
            service_name: service_name,
            service_charge: service_charge,
            service_unit: service_unit,
            service_describe: service_describe
          })
          .then(function (response){
              // alert(JSON.stringify(response.data));
              Alert.alert(
                'Thêm dịch vụ thành công',
                'Chuyển đến giao diện danh sách dịch vụ',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      // Chuyển đến giao diện danh sách dịch vụ khi nhấn OK
                      navigation.navigate('Dịch vụ');
                    },
                  },
                ],
                { cancelable: false }
              );
          })
          .catch(function (error){
              // alert(error.message);
              Alert.alert('Thông báo','Thêm dịch vụ không thành công');
          })
        };
        return (
          <ScrollView style={styles.container} >
            <View >
              
              
              <Text style={styles.subTitle}>Tên dịch vụ <Text style={{color:'red'}}>*</Text></Text>
              <TextInput 
                placeholder='Điện, Nước, Thang máy, Bảo vệ'
                value={service_name}
                onChangeText={setservice_name}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
               <Text style={styles.subTitle}>Phí dịch vụ <Text style={{color:'red'}}>*</Text></Text>
            <TextInput 
                placeholder='0đ'
                value={service_charge}
                onChangeText={setservice_charge}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
          <Text style={styles.subTitle}>Đơn vị tính <Text style={{color:'red'}}>*</Text></Text>
            <TextInput 
                placeholder='VND, VND/m3, VND/Kwh'
                value={service_unit}
                onChangeText={setservice_unit}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
          <Text style={styles.subTitle}>Mô tả </Text>
                <TextInput 
                  placeholder='Hãy nhập vào mô tả nếu có...'
                  value={service_describe}
                  onChangeText={setservice_describe}
                  multiline={true} 
                  numberOfLines={4} 
                  style={styles.mota} 
              />
              
              <StatusBar style="auto" />
              <TouchableOpacity
                onPress={themdv}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                  THÊM DỊCH VỤ
                </Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          );
        


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titulo:{
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',

  },
  subTitle:{
    marginTop: 30,
    marginLeft: 25,
   
    // marginBottom: 20,
    fontSize: 16,
    color: '#000',
    textAlign: 'left'
  },
  forgotservice_name:{
    marginTop: 15,
    fontSize: 15,
    color: 'gray',
    textAlign:'left'
  },
  textInput: {
    marginLeft: 20,
    height: 40,
    width: '85%',
    borderBottomWidth: 1, 
    borderBottomColor: 'gray', 
    borderTopWidth: 0,
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    paddingHorizontal: 5,
    borderRadius: 5,
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
    marginTop: 30,
    minWidth: 100,
    borderRadius:10,
    width: '85%',
    marginLeft: 25,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  mota: {
    marginLeft: 20,
    height: 120, 
    width: '85%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
    fontSize: 16, 
    
    color: '#000000', 
    textAlignVertical: 'top', 
    marginTop: 15, 
    marginBottom: 20, 
    borderColor: '#CCCCCC', 
    borderWidth: 1, 
    paddingVertical: 10, 
  },

});

export default AddService;