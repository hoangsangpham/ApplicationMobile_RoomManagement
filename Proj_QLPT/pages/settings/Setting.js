// Cài đặt
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, Alert} from 'react-native';


function Setting({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('Danh sách tài khoản')}>Danh sách tài khoản</Text>
      <Text style={styles.text} onPress={() => navigation.navigate('Thay đổi mật khẩu')}>Thay đổi mật khẩu</Text>
      <Text style={styles.text} onPress={() => navigation.navigate('Chính sách')}>Chính sách</Text>
      <Text style={styles.text} onPress={() => navigation.navigate('Điều khoản sử dụng')}>Điều khoản sử dụng</Text>
      <Text style={styles.text}>Phiên bản                                        <Text style={{color:'gray'}}>13.9.1</Text></Text>
      <Text style={styles.dangXuat} onPress={() => navigation.navigate('RegisterScreen')}>Đăng xuất</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'left',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        paddingBottom: 20,
        paddingTop: 20
    
    },
    dangXuat: {
        color: 'red',
        fontSize: 22,
        paddingBottom: 20,
        paddingTop: 20

    },
  });

export default Setting;