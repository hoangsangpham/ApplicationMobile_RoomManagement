import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image,Pressable} from 'react-native';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Svg, { Rect } from 'react-native-svg';
import API_URL from '../config';

export default function DetailRenter({route,navigation}) {
  const{renter_name}=route.params;
  const [renter_select, setrenter_select] = useState([]);
  const laydsrenter_select=async()=>{
    try {
      const response = await axios.get(
        API_URL+'/api/getNameRenter/'+renter_name,
      );
      setrenter_select(response.data);
      // AsyncStorage.setItem('user',JSON.stringify(response.data));
      } catch(error){
          alert(error.message);
      }
  }

  React.useEffect(()=>{
    // alert(service_name);
    laydsrenter_select();
  }, []); // Thêm mảng trống để đảm bảo useEffect chỉ chạy một lần

  


  return (
    <View style={styles.container}>
       <Svg
        height="100%"
        width="100%"
        style={{
          position: 'absolute',
          top: -300,
          left: -200,
          right: 0,
          bottom: 0,
        }}
        viewBox="0 0 100 100"
      >
        <Rect x="0" y="0" width="100" height="100" rx="50" ry="50" fill="#00AA4E" />
      </Svg>
      <Svg
        height="100%"
        width="100%"
        style={{
          position: 'absolute',
          top: 200,
          left: 300,
          right: 0,
          bottom: 100,
        }}
        viewBox="0 0 100 100"
      >
        <Rect x="0" y="0" width="100" height="100" rx="50" ry="50" fill="#00AA4E" />
      </Svg>
      {/* <Text style={styles.tieude}>{renter_name}</Text> */}
      <FlatList
        data={renter_select}
        renderItem={({ item }) => (
        <View style={styles.imageDuongVien}>
          <FontAwesome5 name="user-edit" size={40} color="green" />
          <Text style={styles.title}>{item.renter_name} </Text>
          
          <Text style={styles.noidung}>SĐT:                <Text style={{color:'#000'}}>{item.renter_phone}</Text></Text>
          <Text style={styles.noidung}>Ngày sinh:     <Text style={{color:'#000'}}>{item.renter_dateofbirth}</Text></Text>
          <Text style={styles.noidung}>CCCD:            <Text style={{color:'#000'}}>{item.renter_cccd}</Text></Text>
          <Text style={styles.noidung}>Địa chỉ:          <Text style={{color:'#000'}}>{item.renter_address}</Text></Text>
          <Text style={styles.noidung}>Phòng thuê:  <Text style={{color:'#000'}}>{item.renter_room}</Text></Text>
          <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.textStyle}>CẬP NHẬT</Text>
        </Pressable>
        </View>         
        )}
      />
    </View>
      
  )
}
const styles = StyleSheet.create({
   
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  tieude:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue',
    // marginBottom:10,
    marginTop: 30,
  },
  item: {
    backgroundColor: '#e6e6ff',
    marginTop:10,
    alignItems:"center",
    borderRadius: 10
  },
  title: {
    padding: 10,
    fontSize: 28,
    // margin:20,
    fontWeight:'bold',
    color: 'black',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'green',
    margin: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  imageDuongVien:{
    // backgroundColor:'#ccffff',
    backgroundColor: '#fff',
    padding:10,
    alignItems:'left',
    margin:50,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    
  },
  noidung:{
    fontSize: 16,
    color:'#8BA396',
    padding:10,
    alignItems:'center',
    borderRadius:30
  },
  image:{
    width:100,
    height:100,
    margin:10
  },
  });
  