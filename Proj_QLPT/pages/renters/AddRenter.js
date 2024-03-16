import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const {width, height} = Dimensions.get('window')
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import API_URL from '../config';

function AddRenter({ navigation })
{

        const capnhat=async()=>{
          try {
            const response = await axios.post(
              API_URL+'/api/UpdateRoom/'+selectedValue,
            );
            if (response.data){
              // alert("TC");
            }
            else {
              // alert('S');
              alert(error.message);
            }
          } catch(error){
              // alert("A");
              alert(error.message);
          }
        }


      const [items, setItems] = useState([]);
      const [selectedValue, setSelectedValue] = useState(null);

      // Lấy danh danh sách phòng còn trống
      const laydsp = async () => {
        try {
          fetch(API_URL+'/api/getAllRoomNull')
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


        const [renter_name, setrenter_name] = useState('');
        const [renter_phone, setrenter_phone] = useState('');
        // const [renter_email, setrenter_email] = useState('');
        const [renter_dateofbirth, setrenter_dateofbirth] = useState('');
        const [renter_cccd, setrenter_cccd] = useState('');
        const [renter_address, setrenter_address] = useState('');
        const themnt = () => {
            if (!renter_name) {
                alert('Vui lòng điền vào tên người thuê');
                return;
            }
            if (!renter_phone) {
                alert('Vui lòng điền vào số điện thoại');
                return;
            }
            // if (!renter_email) {
            //   alert('Vui lòng điền vào email');
            //   return;
            // }
            if (!renter_dateofbirth) {
                alert('Vui lòng điền vào ngày sinh');
                return;
            }
            if (!renter_cccd) {
              alert('Vui lòng điền vào CCCD/CMND');
              return;
            }
            if (!renter_address) {
                alert('Vui lòng điền vào địa chỉ');
                return;
            }
            if (!selectedValue) {
              alert('Vui lòng chọn phòng');
              return;
            }

            axios
            .post(API_URL+'/api/AddRenter',{
              renter_name: renter_name,
              renter_phone: renter_phone,
              renter_dateofbirth: renter_dateofbirth,
              renter_cccd: renter_cccd,
              renter_address: renter_address,
              renter_room: selectedValue,
            })
            .then(function (response){
              // Thực hiện cập nhật lại tình trạng phòng từ "Còn trống" thành "Đã ở"        
              // updateRoomStatus(selectedValue, "Đã ở");
              capnhat();
                // alert(JSON.stringify(response.data));
                Alert.alert(
                  'Thêm người thuê thành công',
                  'Chuyển đến giao diện danh sách người thuê',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        // Chuyển đến giao diện danh sách người thuê khi nhấn OK
                        navigation.navigate('Người thuê');
                      },
                    },
                  ],
                  { cancelable: false }
                );
            })
            .catch(function (error){
                // alert(error.message);
                Alert.alert('Thêm người thuê không thành công');
            })
          };

        return (
          <ScrollView style={styles.container}>
            <View >
              <Text style={styles.subTitle}>Họ và tên <Text style={{color:'red'}}>*</Text></Text>
              <TextInput 
                placeholder='Nguyễn Văn A'
                value={renter_name}
                onChangeText={setrenter_name}
                underlineColorAndroid="transparent"
                style={styles.textInput}
              />
              <Text style={styles.subTitle}>Số điện thoại <Text style={{color:'red'}}>*</Text></Text>
              <TextInput 
                  placeholder='0XXX'
                  value={renter_phone}
                  onChangeText={setrenter_phone}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                />
                {/* <Text style={styles.subTitle}>Email </Text>
                              <TextInput 
                  placeholder='abc@gmail.com'
                  value={renter_email}
                  onChangeText={setrenter_email}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                /> */}
                <Text style={styles.subTitle}>Ngày sinh </Text>
              <TextInput 
                  placeholder='01/01/2023'
                  value={renter_dateofbirth}
                  onChangeText={setrenter_dateofbirth}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                />
                <Text style={styles.subTitle}>Số CCCD <Text style={{color:'red'}}>*</Text></Text>
              <TextInput 
                  placeholder='0123xxx'
                  value={renter_cccd}
                  onChangeText={setrenter_cccd}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                />
                <Text style={styles.subTitle}>Địa chỉ </Text>
              <TextInput 
                  placeholder='123 XXX'
                  value={renter_address}
                  onChangeText={setrenter_address}
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                />
            <Text style={styles.subTitle}>Phòng <Text style={{color:'red'}}>*</Text></Text>
           
            <RNPickerSelect
                      items={items}
                      placeholder={{ label: 'Chọn một phòng', value: null }}
                      onValueChange={(value) => {
                        // Xử lý khi giá trị thay đổi
                        setSelectedValue(value);
                      }}
                      value={selectedValue}
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
            
              {/* <StatusBar style="auto" /> */}
              <TouchableOpacity
                onPress={themnt}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                  THÊM NGƯỜI THUÊ
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
  forgotrenter_name:{
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
    // padding: 10,
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
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#000000', 
    textAlignVertical: 'top', 
    marginTop: 15, 
    marginBottom: 20, 
    borderColor: '#CCCCCC', 
    borderWidth: 1, 
    paddingVertical: 10, 
  },
});

export default AddRenter;