import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, TextInput , SafeAreaView} from 'react-native';
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

const ListService = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [DATA, setDATA] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [service_select, setServiceSelect] = useState(''); 
  
  const fetchServiceData = async () => {
    try {
      const response = await axios.get(API_URL+'/api/getAllService');
      setDATA(response.data);
      setFilteredData(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchServiceData();
    })
  });

  const handleSearch = text => {
    setSearchText(text);
    const filtered = DATA.filter(item =>
      item.service_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.service_name === service_select ? '#6e3b6e' : '#BAE1CC';
    const color = item.service_name === service_select ? 'white' : 'black';

    return (
      <TouchableOpacity
        onPress={() => {
          setServiceSelect(item.service_name); 
          navigation.navigate('Chi tiết dịch vụ', { service_name: item.service_name });
        }}
        style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.text, { color }]}>{item.service_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchValue={searchText} onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.service_name}
        extraData={service_select}
      />
      <View style={{ alignItems: 'flex-end', padding: 50 }}>
        <Ionicons
          name="add-circle"
          size={70}
          color="green"
          onPress={() => navigation.navigate('Thêm dịch vụ')}
        />
      </View>
    </SafeAreaView>
  );
};

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

export default ListService;