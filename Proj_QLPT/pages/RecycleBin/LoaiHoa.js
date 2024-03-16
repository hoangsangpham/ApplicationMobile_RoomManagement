import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity} from 'react-native';
export default function LoaiHoa({navigation}) {
    const DATA = [
        {
         "maloai":"1",
          "tenloai": "Hoa Quà tặng",
          "hinh":require('../assets/images/cuc_1.jpg')
        },
        {
            "maloai":"2",
            "tenloai": 'Hoa Cưới',
            "hinh": require('../assets/images/cuoi_1.jpg')
        },
        {
            "maloai":"3",
            "tenloai": 'Hoa Hồng',
            "hinh": require('../assets/images/hong_1.jpg')
        },
        {
            "maloai":"4",
            "tenloai": 'Hoa Xuân',
            "hinh": require('../assets/images/xuan_1.jpg')
        }  
         ];
         const [loaihoachon,thaydoichon] =useState('');
         const [tendn,laytendn] =useState('');
         const getValueFunction =()=>{
          AsyncStorage.getItem('tendangnhap').then(
            (value)=>
            laytendn(value),
          );
         };
         React.useEffect(()=>{
          const unsubscribe = navigation.addListener('focus',()=>{
          getValueFunction();
         })});
  return (
    <View style={styles.containerLoaihoa}>
    <Text style={styles.tieude}>Loại Hoa</Text>
    <Text style={{textAlign: 'center',}}>{tendn}</Text>
    <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.item} >
               <TouchableOpacity onPress={
                    () => {
                        navigation.navigate('Hoa',{tenloai:item.tenloai});
                          
                    }}>
              <Text  style={styles.title}>{item.tenloai}</Text>
              </TouchableOpacity>
              
            </View>
          )}
        />
    </View>
  )
}
const styles = StyleSheet.create({
   
  ontainerLoaihoa: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerhoa: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  tieude:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue',
    marginBottom:10,
  },
  item: {
    backgroundColor: '#e6e6ff',
    marginTop:10,
    alignItems:"center",
    borderRadius: 10
  },
  title: {
    fontSize: 12,
    margin:10,
    fontWeight:'bold',
    color:'red'
  },
  });
  
