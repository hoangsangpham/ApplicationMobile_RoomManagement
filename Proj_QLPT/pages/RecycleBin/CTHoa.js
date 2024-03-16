import React from 'react';
import { StyleSheet, Text, View,Image,Modal,Pressable} from 'react-native';
import { useEffect,useState } from 'react';

function CTHoa({route,navigation}) {

  const{hoac} = route.params;

  const [hoa,getHoaChon]=React.useState({
    "mahoa": 1,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Đón xuân",
    "dongia": 15000,
    "hinh": require('../assets/images/cuc_9.jpg'),
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  })

  const gethoa =()=>{
    try {
      getHoaChon(hoac);
    } catch (error){
      alert(error.message);
    }
  };
  React.useEffect(()=>{
    gethoa();
  },[]);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{hoa.tenhoa}</Text>
        <Image source={hoa.hinh} /> 
        <Text style={styles.modalText}>{hoa.mota}</Text>
        <Text style={styles.modalText}>Giá Bán :{hoa.dongia} vnđ</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.textStyle}>Đóng</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.navigate('LoaiHoa');
          }}>
          <Text style={styles.textStyle}>Home</Text>
        </Pressable>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    
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
    backgroundColor: '#2196F3',
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
  });
  
export default CTHoa;
