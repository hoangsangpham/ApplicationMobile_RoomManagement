import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, TextInput, StyleSheet , TouchableOpacity,} from 'react-native';
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

function ListRenter({ navigation }) {
  
  const [searchText, setSearchText] = useState('');
  const [DATA, setDATA] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [renter_select, setRenterSelect] = useState(''); 

  const fetchRenterData = async () => {
    try {
      const response = await axios.get(API_URL+'/api/getAllRenter');
      setDATA(response.data);
      setFilteredData(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchRenterData();
    });
  });

  const handleSearch = text => {
    setSearchText(text);
    const filtered = DATA.filter(item =>
      item.renter_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.renter_name === renter_select ? '#6e3b6e' : '#BAE1CC';
    const color = item.renter_name === renter_select ? 'white' : 'black';

    return (
      <TouchableOpacity
        onPress={() => {
          setRenterSelect(item.renter_name); 
          navigation.navigate('Chi tiết người thuê', { renter_name: item.renter_name });
        }}
        style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.text, { color }]}>{item.renter_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchValue={searchText} onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.renter_name}
        extraData={renter_select}
      />
      <View style={{ alignItems: 'flex-end', padding: 50 }}>
        <Ionicons name="add-circle" size={70} color="green" onPress={() => navigation.navigate('Thêm người thuê')} />
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


export default ListRenter;