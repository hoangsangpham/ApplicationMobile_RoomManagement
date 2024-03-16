import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {ScrollView, SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const {width, height} = Dimensions.get('window')

import axios from 'axios';

import RNPickerSelect from 'react-native-picker-select';
import API_URL from '../config';


function AddProblem({ navigation })
{
      const [items, setItems] = useState([]);
      const [selectedValues, setSelectedValues] = useState([]);


        const [problem_room, setproblem_room] = useState([]);
        const [problem_time, setproblem_time] = useState(''); 
        const [problem_name, setproblem_name] = useState('');
        const [problem_status, setproblem_status] = useState(''); 
        const [problem_level, setproblem_level] = useState(''); 
        const [problem_describe, setproblem_describe] = useState(''); 

        const laydsp = async () => {
          try {
            fetch(API_URL+'/api/getAllRoom')
            .then(response => response.json())
            .then(data => {
              setItems(data.map(item => ({ label: item.room_name, value: item.room_name })));
            })
            .catch(error => console.error('Error fetching data:', error));
  
          } catch (error) {
            alert(error.message);
          }
        };
  
        React.useEffect(() => {
          const unsubscribe = navigation.addListener('focus', () => {
            laydsp();
          })
        }, []);



        const themsc = () => {
            if (!problem_room) {
                Alert.alert('Thông báo','Vui lòng chọn phòng');
                return;
            }
            if (!problem_time) {
              Alert.alert('Thông báo','Vui lòng nhập thời gian sự cố');
                return;
            }
            if (!problem_name) {
              Alert.alert('Thông báo','Vui lòng nhập sự cố');
                return;
            }
            if (!problem_status) {
              Alert.alert('Thông báo','Vui lòng chọn tình trạng phòng');
                return;
            }
            
            if (!problem_level) {
                alert('Vui lòng chọn mức độ nghiêm trọng');
                return;
            }
            if (!problem_describe) {
                alert('Vui lòng nhập vào mô tả');
                return;
            }
            axios
            .post(API_URL+'/api/AddProblem',{
              problem_room: problem_room,
              problem_time: problem_time,
              problem_name: problem_name,
              problem_status: problem_status,
              problem_level: problem_level,
              problem_describe: problem_describe,
            })
            .then(function (response){
                // alert(JSON.stringify(response.data));
                Alert.alert(
                  'Thêm sự cố thành công',
                  'Chuyển đến giao diện danh sách sự cố',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        navigation.navigate('Sự cố');
                      },
                    },
                  ],
                  { cancelable: false }
                );
            })
            .catch(function (error){
                // alert(error.message);
                Alert.alert('Thông báo','Thêm sự cố không thành công');
            })
        };
    
        return (
          <ScrollView style={styles.container}>
            <View >
              
              <Text style={styles.subTitle}>Tên phòng <Text style={{color:'red'}}>*</Text></Text>
              <RNPickerSelect
                      items={items}
                      placeholder={{ label: 'Chọn một phòng', value: null }}
                      onValueChange={(value) => {
                        // Xử lý khi giá trị thay đổi
                        setproblem_room(value);
                      }}
                      value={problem_room}
                      style={{
                        inputAndroid: {
                          textAlign: 'left', 
                          marginLeft: -14,
                          height:45,
                        },
        
        
                      viewContainer: {
          
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        width: '85%',
                        marginLeft: 22,
                        
                      },
                    }}
                    />
              {/* <TextInput 
                placeholder='Phòng xảy ra sự cố'
                // value={room_name}
                // onChangeText={setroom_name}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              /> */}
              <Text style={styles.subTitle}>Thời gian <Text style={{color:'red'}}>*</Text></Text>
              
              <TextInput 
                placeholder='Ngày cụ thể'
                value={problem_time}
                onChangeText={setproblem_time}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
              <Text style={styles.subTitle}>Sự cố <Text style={{color:'red'}}>*</Text></Text>
                <TextInput 
                  placeholder='Nhập tóm tắt sự cố'
                  value={problem_name}
                  onChangeText={setproblem_name}
                  multiline={true} 
                  numberOfLines={4} 
                  style={styles.roomDescribeInput} 
              />
              <Text style={styles.subTitle}>Tình trạng <Text style={{color:'red'}}>*</Text></Text>
              
              <RNPickerSelect
                placeholder={{ label: 'Vui lòng chọn tình trạng', value: null }}
                // onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Đang yêu cầu', value: 'Đang yêu cầu' },
                    { label: 'Hoàn thành', value: 'Hoàn thành' },
                ]}
                onValueChange={setproblem_status}
                value={problem_status}
                style={{
                  inputAndroid: {
                    textAlign: 'left', // Căn chữ về bên trái
                    marginLeft: -14,
                    height:45,
                  },
                  
                  
                  viewContainer: {
                    // Để bao quanh RNPickerSelect có border bottom, sử dụng thuộc tính viewContainer
                    borderBottomWidth: 1,
                    borderBottomColor: 'gray',
                    width: '85%',
                    marginLeft: 22,
                  },
                }}
              />
                <Text style={styles.subTitle}>Mức độ nghiêm trọng </Text>
                <RNPickerSelect
                  placeholder={{ label: 'Vui lòng chọn mức độ nghiêm trọng ', value: null }}
                  // onValueChange={(value) => console.log(value)}
                  items={[
                      { label: 'Cao', value: 'Cao' },
                      { label: 'Trung bình', value: 'Trung bình' },
                      { label: 'Thấp', value: 'Thấp' },
                  ]}
                  onValueChange={setproblem_level}
                  value={problem_level}
                  style={{
                    inputAndroid: {
                      textAlign: 'left', // Căn chữ về bên trái
                      marginLeft: -14,
                      height:45,
                     
                    },
                    
                    
                    viewContainer: {
                      // Để bao quanh RNPickerSelect có border bottom, sử dụng thuộc tính viewContainer
                      borderBottomWidth: 1,
                      borderBottomColor: 'gray',
                      width: '85%',
                      marginLeft: 22,
                      
                    },
                  }}
                />
                <Text style={styles.subTitle}>Mô tả sự cố </Text>
                <TextInput 
                  placeholder='Nhập mô tả sự cố'
                  value={problem_describe}
                  onChangeText={setproblem_describe}
                  multiline={true} 
                  numberOfLines={4} 
                  style={styles.roomDescribeInput} 
              />
        
              <StatusBar style="auto" />
              <TouchableOpacity
                onPress={themsc}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                  THÊM SỰ CỐ
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
    marginTop: 20,
    marginLeft: 25,
   
    // marginBottom: 20,
    fontSize: 16,
    color: '#000',
    textAlign: 'left'
  },
  forgotroomname:{
    marginTop: 15,
    fontSize: 15,
    color: 'gray',
    textAlign:'left'
  },
  textInput: {
    marginLeft: 20,
    height: 40,
    width: '85%',
    borderBottomWidth: 1, // Độ dày của border dưới cùng
    borderBottomColor: '#BBC4BF', // Màu của border dưới cùng
    borderTopWidth: 0, // Ẩn border trên cùng
    borderLeftWidth: 0, // Ẩn border bên trái
    borderRightWidth: 0, // Ẩn border bên phải
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 15,
    
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
    marginTop: 40,
    minWidth: 100,
    borderRadius:10,
    width: '85%',
    marginLeft: 30,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  roomDescribeInput: {
    marginLeft: 20,
    height: 80, 
    width: '85%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
    color: '#000000', 
    textAlignVertical: 'top', 
    marginTop: 10, 
    marginBottom: 10, 
    borderColor: '#CCCCCC', 
    borderWidth: 1, 
    paddingVertical: 10, 
    fontSize: 15,
  },
});

export default AddProblem;