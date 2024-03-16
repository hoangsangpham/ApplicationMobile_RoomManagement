import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, SafeAreaView, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
 
var db = SQLite.openDatabase('qlbhoa.db');
function DsNguoidung({navigation}){
    let [flatListItems, setFlatListItems] = useState([]);
 
 
    const laydsnd=() => {
       
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT * FROM table_user',
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
 
 
                    setFlatListItems(temp);
                    }
                );
            });
       
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            laydsnd();
        })
    });
   
    let listViewItemSeparator = () =>{
        return (
            <View
                style={{
                    height: 0.2,
                    width: '100%',
                    backgroundColor: '#808080'
                }}
            />
        );
    };
 
    let listItemView = (item) => {
        return(
            <View
                key={item.user_id}
                style={{ backgroundColor:'white', padding: 20}}>
                <Text>ID:{item.user_id}</Text>
 
                <Text>Name: {item.user_name}</Text>
                <Text>Contact: {item.password}</Text>
                <Text>Address: {item.emailaddress}</Text>
            </View>
        );
    };
 
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{flex:1}}>
                    <FlatList
                        data={flatListItems}
                        ItemSeparatorComponent={listViewItemSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => listItemView(item)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
 
export default DsNguoidung