import React, {useEffect, useState} from 'react';
import { Pressable,FlatList, Text, View, SafeAreaView, Alert, Button,TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';
import API_URL from '../config';

function ListUser({navigation}){
    
    const [dsuser, setdsusser] = useState([]);
    const laydsuser = async()=>{
      try {
        const response = await axios.get(
            API_URL+'/api/getAllUser',
        );
        setdsusser(response.data);
        // AsyncStorage.setItem('user',JSON.stringify(response.data));
        } catch(error){
            alert(error.message);
        }
    }
  
    React.useEffect(()=>{
      laydsuser();
    }, []); // Thêm mảng trống để đảm bảo useEffect chỉ chạy một lần
    
    return (
        <SafeAreaView style={{flex:1, paddingTop: 0}}>
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{flex:1}}>
                <FlatList
                    data={dsuser}
                    renderItem={({ item }) => (
                    <View style={styles.imageDuongVien}>
                    <Text style={styles.title}>Tài khoản: {item.username} </Text>
                    <Text style={styles.noidung}>Mật khẩu: {item.password} </Text>
                    <Text style={styles.noidung}>Email: {item.email} </Text>
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
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      fontSize: 16,
      color: 'white',
      backgroundColor: '#0099FF',
      padding: 5,
      marginTop: 10,
      borderRadius:50,
    },
    buttonTextStyle: {
      fontWeight: 'bold',
      padding: 5,
      color: 'red',
      textAlign: 'center',
    },
    imageDuongVien:{
        // backgroundColor:'#ccffff',
        backgroundColor: '#fff',
        padding:10,
        alignItems:'left',
        margin:10,
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
        color:'red',
        padding:10,
        alignItems:'center',
        borderRadius:30
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
    title: {
        fontSize: 18,
        // margin:20,
        fontWeight:'bold',
        color: 'black',
        textAlign: 'left',
      },
  });
export default ListUser;

