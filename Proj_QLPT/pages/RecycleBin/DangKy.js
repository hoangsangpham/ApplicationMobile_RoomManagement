import React, {useEffect, useState} from 'react';
import { StyleSheet,Button, View, Text, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { TextInput } from 'react-native-gesture-handler';
var db = SQLite.openDatabase('qlbhoa.db');
function Dangky({ navigation })
{
    useEffect(() => {
        taobanguser();
    }, []);
    // Tạo User
    const taobanguser=()=>{
        db.transaction(function (txn){
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), password VARCHAR(20), emailaddress VARCHAR(255))',
                []
            );
        });
    }
        const [userName, setUserName] = useState('');
        const [password, setpassword] = useState('');
        const [emailaddress, setmailaddress] = useState('');
        let dangky = () => {
            if (!userName) {
                alert('Please fill name');
                return;
            }
            if (!password) {
                alert('Please fill pass');
                return;
            }
            if (!emailaddress) {
                alert('Please fill Email address');
                return;
            }
            db.transaction(function (tx){
                tx.executeSql(
                    'INSERT INTO table_user (user_name, password, emailaddress) VALUES (?,?,?)',
                    [userName, password, emailaddress],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                'You are Registered Successfully',
                                [
                                    {
                                        text: 'ok',
                                        onPress: () => navigation.navigate('HomeScreen'),
                                    },
                                ],
                                {cancelable: false}
                            );
                        } else alert('Registration Failed');
                    }
                );
            });
        };
 
        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                  style={styles.input}
                  value={userName}
                  onChangeText={setUserName}
                />

                <Text style={styles.label}>Password:</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setpassword}
                  secureTextEntry={true}
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                  style={styles.input}
                  value={emailaddress}
                  onChangeText={setmailaddress}
                  keyboardType="email-address"
                />

                <Button title="Đăng ký" onPress={dangky} />
            </View>        
        )
 
 
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Dangky