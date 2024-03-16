import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, TextInput, StyleSheet , TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import API_URL from '../config';

const SearchBar = ({ searchValue, onSearch }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Ionicons style={styles.icon} name="search" size={20} color="#999999" />
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm theo tên"
        onChangeText={onSearch}
        value={searchValue}
        placeholderTextColor="#999999"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

function ListRoom({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [DATA, setDATA] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [room_select, setRoomSelect] = useState(''); 
  
  const fetchRoomData = async () => {
    try {
      const response = await axios.get(API_URL+'/api/getAllRoom');
      setDATA(response.data);
      setFilteredData(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchRoomData();
    })
  }, []); // Thêm mảng trống để đảm bảo useEffect chỉ chạy một lần

  const handleSearch = text => {
    setSearchText(text);
    const filtered = DATA.filter(item =>
      item.room_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.room_name === room_select ? '#6e3b6e' : '#BAE1CC';
    const color = item.room_name === room_select ? 'white' : 'black';

    return (
      <TouchableOpacity
        onPress={() => {
          setRoomSelect(item.room_name); 
          navigation.navigate('Chi tiết phòng', { room_name: item.room_name });
        }}
        style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.text, { color }]}>{item.room_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchValue={searchText} onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.room_name}
        extraData={room_select}
      />
        <View style={{ alignItems: 'flex-end', padding: 50 }}>
        <Ionicons name="add-circle" size={70} color="green" onPress={() => navigation.navigate('Thêm phòng')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});


export default ListRoom;