import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {ScrollView, SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const {width, height} = Dimensions.get('window')
import axios from 'axios';

import RNPickerSelect from 'react-native-picker-select';
import API_URL from '../config';

function AddRoom({ navigation })
{

      const [items, setItems] = useState([]);
      const [selectedValues, setSelectedValues] = useState([]);
      const [ds, setds] = useState([]);

      const laydsdv = async () => {
        try {
          fetch(API_URL+'/api/getAllService')
          .then(response => response.json())
          .then(data => {
            setItems(data.map(item => ({ label: item.service_name, value: item.service_name })));
          })
          .catch(error => console.error('Error fetching data:', error));

        } catch (error) {
          alert(error.message);
        }
      };

      React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          laydsdv();
        })
      }, []);

      const handleValueChange = (value) => {
        // Kiểm tra xem giá trị đã được chọn trước đó chưa
        const isSelected = selectedValues.includes(value);
    
        // Cập nhật mảng giá trị được chọn dựa trên việc chọn hoặc bỏ chọn
        if (isSelected) {
          setSelectedValues(selectedValues.filter(val => val !== value));
        } else {
          setSelectedValues([...selectedValues, value]);
        }
      };
    
      const removeSelectedValue = (value) => {
        // Xoá giá trị đã chọn khỏi mảng
        setSelectedValues(selectedValues.filter(val => val !== value));
      };
      const displaySelectedValues = () => {
        // Hiển thị danh sách giá trị được chọn
        alert(`${selectedValues.join(', ')}`);
      };

      const [limit, setlimit] = useState(null);

      const datalimit = Array.from({ length: 10 }, (_, index) => ({
        label: `${index + 1}`,
        value: index + 1,
      }));


        const [room_name, setroom_name] = useState(''); //Tên phòng
        const [room_price, setroom_price] = useState(''); //Giá phòng
        const [room_status, setroom_status] = useState(''); //Tình trạng
        const [room_limit, setroom_limit] = useState('1'); //Giới hạn người thuê
        const [room_deposit, setroom_deposit] = useState(''); //Tiền cọc
        const [room_service, setroom_service] = useState(''); //Dịch vụ
        const [room_describe, setroom_describe] = useState(''); //Mô tả
        const thempt = () => {
            if (!room_name) {
                Alert.alert('Thông báo','Vui lòng điền vào tên phòng');
                return;
            }
            if (!room_price) {
              Alert.alert('Thông báo','Vui lòng điền vào giá phòng');
                return;
            }
            if (!room_status) {
              Alert.alert('Thông báo','Vui lòng chọn tình trạng phòng');
                return;
            }
            // if (!limit) {
            //   Alert.alert('Thông báo','Vui lòng chọn giới hạn người thuê');
            //   return;
            // }
            if (!room_deposit) {
                alert('Vui lòng điền vào tiền cọc');
                return;
            }
            // Kiểm tra xem có ít nhất một giá trị được chọn hay không
            if (selectedValues.length === 0) {
              Alert.alert('Thông báo','Vui lòng điền vào dịch vụ');
              return;
            } 
            if (!room_describe) {
                alert('Vui lòng điền vào mô tả');
                return;
            }
            axios
            .post(API_URL+'/api/AddRoom',{
              room_name: room_name,
              room_price: room_price,
              room_status:room_status,
              // room_limit: limit,
              room_deposit: room_deposit,
              room_service: `${selectedValues.join(', ')}`,
              room_describe: room_describe
            })
            .then(function (response){
                // alert(JSON.stringify(response.data));
                Alert.alert(
                  'Thêm phòng thành công',
                  'Chuyển đến giao diện danh sách phòng',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        // Chuyển đến giao diện danh sách phòng khi nhấn OK
                        navigation.navigate('Phòng');
                      },
                    },
                  ],
                  { cancelable: false }
                );
            })
            .catch(function (error){
                // alert(error.message);
                Alert.alert('Thông báo','Thêm phòng không thành công');
            })
        };
        return (
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Tên phòng <Text style={{color:'red'}}>*</Text></Text>
              
              <TextInput 
                placeholder='P01, P02,...'
                value={room_name}
                onChangeText={setroom_name}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
              <Text style={styles.subTitle}>Giá phòng <Text style={{color:'red'}}>*</Text></Text>
              <TextInput 
                  placeholder='0đ'
                  value={room_price}
                  onChangeText={setroom_price}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                />
              <Text style={styles.subTitle}>Tình trạng <Text style={{color:'red'}}>*</Text></Text>
              
                <RNPickerSelect
                  placeholder={{ label: 'Vui lòng chọn tình trạng', value: null }}
                  // onValueChange={(value) => console.log(value)}
                  items={[
                      { label: 'Còn trống', value: 'Còn trống' },
                      { label: 'Đã ở', value: 'Đã ở' },
                  ]}
                  onValueChange={setroom_status}
                  value={room_status}
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
              
              {/* <Text style={styles.subTitle}>Giới hạn người thuê <Text style={{color:'red'}}>*</Text></Text>
                <View style={styles.textInput}>
                <RNPickerSelect
                  onValueChange={(value) => setlimit(value)}
                  items={datalimit}
                  value={limit}
                />
                </View> */}
                <Text style={styles.subTitle}>Tiền cọc </Text>
              <TextInput 
                  placeholder='0đ'
                  value={room_deposit}
                  onChangeText={setroom_deposit}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                />
                <Text style={styles.subTitle}>Dịch vụ <Text style={{color:'red'}}>*</Text></Text>
                
                <RNPickerSelect
                  items={items}
                  placeholder={{ label: 'Chọn một hoặc nhiều dịch vụ', value: null }}
                  onValueChange={handleValueChange}
                  value={selectedValues}
                  multiple
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
                
                <View style={styles.subTitle}>
                  <Text style={styles.textds}>Danh sách dịch vụ đã chọn:</Text>
                  <ScrollView>
                    {selectedValues.map((item, index) => (
                      <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <Text style={{ fontSize:16, fontWeight: 'bold'}} >{item}</Text>
                        {/* <Button title="Xoá" onPress={() => removeSelectedValue(item)} /> */}
                         <TouchableOpacity style={styles.button} onPress={() => removeSelectedValue(item)} >
                          <Text style={styles.text}>Xóa</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </ScrollView>
                </View>

              {/* <FlatList
                data={selectedValues}
                keyExtractor={(item) => (item ? item.toString() : 'null-key')}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Text>{item}</Text>
                    <Button title="Xoá" onPress={() => removeSelectedValue(item)} />
                  </View>
                )}
              /> */}
            {/* <Button title="Hiển thị danh sách giá trị được chọn" onPress={displaySelectedValues} /> */}
                <Text style={styles.subTitle}>Mô tả </Text>
                <TextInput 
                  placeholder='Hãy nhập vào mô tả nếu có...'
                  value={room_describe}
                  onChangeText={setroom_describe}
                  multiline={true} 
                  numberOfLines={2} 
                  style={styles.roomDescribeInput} 
              />
        
              <StatusBar style="auto" />
              <TouchableOpacity
                onPress={thempt}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                  THÊM PHÒNG
                </Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          );
}

const styles = StyleSheet.create({
  textds:{
    fontSize: 16,
    fontStyle: 'italic'
  },
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
    marginLeft: 22,
   
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
    marginTop: 20,
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
  roomDescribeInput: {
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
  button: {
    // backgroundColor: '#3498db', // Màu nền của nút
    backgroundColor: '#00AA4E', // Màu nền của nút
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10, // Bo tròn các góc
    marginRight: 40
  },
  text: {
    color: '#ffffff', // Màu chữ trắng
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddRoom;