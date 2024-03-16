import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image,Pressable} from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Svg, { Rect } from 'react-native-svg';
import API_URL from '../config';

export default function DetailRoom({route,navigation}) {
  const{room_name}=route.params;
  const [room_select, setroom_select] = useState([]);
  const laydsroom_select=async()=>{
    try {
      const response = await axios.get(
        API_URL+'/api/getNameRoom/'+room_name,
      );
      setroom_select(response.data);
      // AsyncStorage.setItem('user',JSON.stringify(response.data));
      } catch(error){
          alert(error.message);
      }
  }

  React.useEffect(()=>{
    // alert(service_name);
    laydsroom_select();
  }, []); // Thêm mảng trống để đảm bảo useEffect chỉ chạy một lần

  


  return (
    <View style={styles.container}>
      {/* <Text style={styles.tieude}>{room_name}</Text> */}
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
      <FlatList
        data={room_select}
        contentContainerStyle={{ alignItems: 'flex-start' }}
        renderItem={({ item }) => (
        <View style={styles.imageDuongVien}>
          <MaterialCommunityIcons name="home-account" size={40} color="green" />
          <Text style={styles.title}> {item.room_name} </Text>
          <Text style={styles.noidung}>Giá phòng:        <Text style={{color:'#000', }}>{item.room_price}</Text> </Text>
          <Text style={styles.noidung}>Tình trạng:        <Text style={{color:'#000', }}>{item.room_status}</Text> </Text>
          {/* <Text style={styles.noidung}>Giới hạn người thuê: {item.room_limit}</Text> */}
          <Text style={styles.noidung}>Tiền cọc:           <Text style={{color:'#000', }}>{item.room_deposit}</Text> </Text>
          <Text style={styles.noidung}>Dịch vụ:             <Text style={{color:'#000', }}>{item.room_service}</Text></Text>
          <Text style={styles.noidung}>Mô tả:                <Text style={{color:'#000', }}>{item.room_describe}</Text> </Text>
          <Image  source={require('../rooms/images/phong1.jpg')} style={styles.image} />
          <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.textStyle}>CẬP NHẬT</Text>
        </Pressable>
          {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.textStyle}>Đóng</Text>
        </Pressable> */}
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
    fontSize: 28,
    // margin:20,
    fontWeight:'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
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
    margin: 16,
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
    margin:40,
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
    padding:8,
    alignItems:'center',
    borderRadius:30,
    
  },
  image:{
    width:300,
    height:200,
    margin:10,
    
  },
  });
  