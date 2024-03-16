import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Svg, { Rect } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_URL from './config';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [user, getuser] = useState({"username":"Admin","password":"333","email":"a@"});
  const [countService, setcountService] = useState(0);
  const [countRenter, setcountRenter] = useState(0);
  const [countRoom, setcountRoom] = useState(0);
  const [countRoomNull, setcountRoomNull] = useState(0);
        

        //Cap nhat sau khi chuyen man hinh
      React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          Layuser();
          demsldv();
          demslnt();
          demslpt();
          demslptct();
        })
      },[]);

      // Hiển thị tên tài khoản sau khi đăng nhập
      const Layuser = async  () => {
            AsyncStorage.getItem('user').then(
                (value) => 
                    getuser(JSON.parse(value)),
            );
      };

      // Hiển thị số lượng dịch vụ
       const demsldv= async  () => {
        try {
          const response = await axios.get(API_URL+'/api/getCountDataService');
          setcountService(response.data);
        } catch (error) {
          alert(error.message);
        }
      };

      // // Hiển thị số lượng người thuê
      const demslnt= async () => {
        try {
          const response = await axios.get(API_URL+'/api/getCountDataRenter');
          setcountRenter(response.data);
        } catch (error) {
          alert(error.message);
        }
      };

      // // Hiển thị số lượng phòng
      const demslpt= async () => {
        try {
          const response = await axios.get(API_URL+'/api/getCountDataRoom');
          setcountRoom(response.data);
        } catch (error) {
          alert(error.message);
        }
      };
      // Hiển thị số lượng phòng còn trống
      const demslptct= async () => {
        try {
          const response = await axios.get(API_URL+'/api/getNameRoomNull');
          setcountRoomNull(response.data);
        } catch (error) {
          alert(error.message);
        }
      };


  return (
    <View style={styles.container}>
      <Svg
        height="100%"
        width="110%"
        style={{
          position: 'absolute',
          top: -300,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        viewBox="0 0 100 100"
      >
        <Rect x="0" y="0" width="100" height="100" rx="15" ry="15" fill="#00AA4E" />
      </Svg>
      <View style={styles.top}>
        <View style={styles.tieude}>
          <Text style={{fontSize:16, color:'#fff'}}>Xin chào</Text>
        </View>
        <View style={styles.hoten}>
          <View>
            {/* <Text style={{fontSize:30}}>Đào Nhâm Phúc</Text> */}
            <Text style={{fontSize:30, color:'#fff', fontWeight:'bold', fontStyle:'normal'}}>{user?.username ?? ""}</Text>
            {/* <Text >{user.user_name}</Text> */}
            {/* <Text style={styles.textStyle}>
              {user.user_name}
            </Text> */}
          </View>
          <View  style={{flexDirection:'row'}}>
            <View style={styles.icon}>
              <AntDesign name="setting" size={24} color="#fff"
              onPress={() => navigation.navigate('Cài đặt')}/>
            </View>
            <View style={styles.icon}>
              <Octicons name="bell" size={24} color="#fff" />
            </View>
            
          </View>
          </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.column}>
            <Text style={styles.text}>Số phòng</Text>
            <Text style={styles.text}>{countRoom}</Text>
            <Text style={styles.text}>Số dịch vụ</Text>
            <Text style={styles.text}>{countService}</Text>
        </View>
        <View style={styles.column}>
            <Text style={styles.text}>Số phòng trống</Text>
            <Text style={styles.text}>{countRoomNull}</Text>
            <Text style={styles.text}>Số người thuê</Text>
            <Text style={styles.text}>{countRenter}</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        {/* Hàng 1 */}
        <View style={styles.rownew}>
          <View style={styles.columnnew}>
            <FontAwesome5 name="lightbulb" size={24} color="#888888" 
            onPress={() => navigation.navigate('Service')}/>
            <Text style={styles.textnew}>Dịch vụ</Text>
          </View>
          <View style={styles.columnnew}>
            {/* <SimpleLineIcons name="speedometer" size={24} color="#FF9900" /> */}
            <MaterialIcons name="apartment" size={24} color="green" 
                      onPress={() => navigation.navigate('Room')}/>
            <Text style={styles.textnew}>Phòng</Text>
          </View>
          <View style={styles.columnnew}>
          <FontAwesome5 name="file-invoice-dollar" size={24} color="#00CC00" 
          onPress={() => navigation.navigate('BillStack')}/>
          
            <Text style={styles.textbottom}>Hoá đơn</Text>
          </View>
        </View>
        
        {/* Hàng 2 */}
        <View style={styles.rownew}>
          <View style={styles.columnnew}>
            {/* Trả về giao diện HomeStack */}
          <Ionicons name="md-people-sharp" size={24} color="blue" 
            onPress={() => navigation.navigate('Renter')}/> 
            <Text style={styles.textnew}>Người thuê</Text>
          </View>
          <View style={styles.columnnew}>
            <MaterialIcons name="report-problem" size={24} color="red" 
            onPress={() => navigation.navigate('ProblemStack')}/> 
            <Text style={styles.textnew}>Sự cố</Text>
          </View>
          <View style={styles.columnnew}>
          <FontAwesome name="handshake-o" size={24} color="#0099FF"
          onPress={() => navigation.navigate('ContractStack')}
           />
            <Text style={styles.textbottom}>Hợp đồng</Text>
          </View>
        </View>

        {/* Hàng 3 */}
        <View style={styles.rownew}>
          <View style={styles.columnnew}>
            <MaterialIcons name="contact-support" size={24} color="#FFCC00"
            onPress={() => navigation.navigate('InstructStack')} />
            <Text style={styles.textnew}>Hướng dẫn</Text>
          </View>
          <View style={styles.columnnew}>
            <MaterialCommunityIcons name="book-edit-outline" size={24} color="#33CCCC"
            onPress={() => navigation.navigate('PaybookStack')} />
            <Text style={styles.textbottom}>Sổ nợ</Text>
          </View>
          <View style={styles.columnnew}>
            <FontAwesome5 name="dollar-sign" size={24} color="#FF00FF"
            onPress={() => navigation.navigate('StakeStack')}  />
            <Text style={styles.textbottom}>Cọc giữ chỗ</Text>
          </View>
        </View>
      
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 5,
    paddingTop:80,
    padding: 15,

  },
  top: {
    flex: 0.1,
    // backgroundColor: 'white',
    // borderWidth: 0,
    borderRadius:20,
    borderColor: '#C0C0C0',
 
    

    
  },
  middle: {
    
    marginTop: -120,
    height: 140,
    marginBottom: -70,
    backgroundColor: 'white',
    borderWidth: 0.7,
    borderRadius:10,
    borderColor: '#C0C0C0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
 
  bottom: {
    height: 400,
    padding: 0,
    marginBottom: 60,
    marginTop: -100,
    backgroundColor: 'white',
    borderWidth: 0.7,
    borderRadius:10,
    borderColor: '#C0C0C0',
    flexDirection: 'column', // Hiển thị theo chiều dọc
    justifyContent: 'center', // Căn giữa theo chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    // padding: 16,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  tieude: {
    fontSize:18,
  },
  hoten: {
    fontSize:28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    padding:10,
   
  },
  column: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginTop: 12,
    marginRight: 18,
  },
  text: {
    fontSize: 18,
    padding:2,
  },
  columnbottom: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    
    padding:10
  },
  textbottom: {
    fontSize: 18,
    padding:10,
  },
  //Bottom
  rownew: {
    flexDirection: 'row', // Hiển thị theo chiều ngang
  },
  columnnew: {
    flex: 1, // Các cột chiếm phần bằng nhau
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'black',
    height: 100, // Điều chỉnh độ cao theo nhu cầu
  },
  textnew: {
    fontSize: 18,
    padding:10
  },
});

export default HomeScreen;