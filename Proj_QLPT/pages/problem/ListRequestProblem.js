import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, TextInput , SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import API_URL from '../config';

function ListRequestProblem({ navigation }) {

    const [DATA, setDATA] = useState([]);
    
    const fetchProblemData = async () => {
      try {
        const response = await axios.get(API_URL+'/api/getAllProblemRequest');
        setDATA(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
  
    React.useEffect(() => {
    //   const unsubscribe = navigation.addListener('focus', () => {
        fetchProblemData();
    //   })
    },[]);

    return (
      
        <FlatList
        data={DATA}
        contentContainerStyle={{ alignItems: 'flex-start' }}
        renderItem={({ item }) => (
        <View style={styles.imageDuongVien}>
          <Entypo name="warning" size={40} color="#BFB700" />
          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:28, margin:10}}> {item.problem_room} </Text>
          <Text style={styles.noidung}>Thời gian:          <Text style={{color:'#000'}}>{item.problem_time}</Text></Text>
          <Text style={styles.noidung}>Tên sự cố:          <Text style={{color:'#000'}}>{item.problem_name}</Text> </Text>
          <Text style={styles.noidung}>Tình trạng:         <Text style={{color:'#000'}}>{item.problem_status}</Text></Text>
          <Text style={styles.noidung}>Mức độ:             <Text style={{color:'#000'}}>{item.problem_level}</Text> </Text>
          <Text style={styles.noidung}>Mô tả:                 <Text style={{color:'#000'}}>{item.problem_describe}</Text></Text>
          {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.textStyle}>CẬP NHẬT</Text>
        </Pressable> */}
        </View>     
            
        )}
      />
      );
    };
    
const styles = StyleSheet.create({
  noidung:{
    fontSize: 16,
    color:'#8BA396',
    padding:10,
    alignItems:'center',
    borderRadius:30
  },
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        paddingHorizontal: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
      },
      searchInput: {
        height: 40,
        paddingHorizontal: 10,
        color: '#333333',
        borderRadius: 20,
      },
      item: {
        padding: 12,
        marginVertical: 6,
        fontSize: 20,
        fontWeight: 'bold',
        width: '90%',
        marginLeft: 20,
        
      },
      text: {
        fontSize: 16,
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
});

export default ListRequestProblem