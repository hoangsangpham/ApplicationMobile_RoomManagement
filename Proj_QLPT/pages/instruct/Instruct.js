import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Instruct = () => {
    return (
      <ScrollView style={styles.container}>
      <View >
        <Text style={styles.title}>HƯỚNG DẪN SỬ DỤNG VINAHOME</Text>
        <Text style={styles.noidungtitle}>
          Chào mừng bạn đến với VINAHOME
         
        </Text>
        <Text style={styles.title2}>
          Các tính năng chính:
          </Text>
        <Text style={styles.noidung}>
          Tổng quan
        </Text>
        <Text style={styles.noidung}>
          Đăng ký - Đăng nhập
        </Text>
        <Text style={styles.noidung}>
          Dịch vụ
        </Text>
        <Text style={styles.noidung}>
          Phòng cho thuê
        </Text>
        <Text style={styles.noidung}>
          Hợp đồng
        </Text>
        <Text style={styles.noidung}>
          Hóa đơn
        </Text>
        <Text style={styles.noidung}>
          Cọc giữ chỗ
        </Text>

        <Text style={styles.title2}>
          Có 4 cách để truy cập phần hướng dẫn
        </Text>
        
        
        <Text style={styles.noidungtitle}>
          1. Từ màn hình chính của ứng dụng bạn chọn biểu tượng <Text style={{fontWeight:'bold'}}>Hướng Dẫn</Text> 
        </Text>
        <Text style={styles.noidungtitle}>
          2. Từ các màn hình tính năng như hợp đồng, người thuê, ... bạn chọn biểu tượng <Text style={{fontWeight:'bold'}}>Dấu Hỏi</Text> ở góc phải trên màn hình
        </Text>
        <Text style={styles.noidungtitle}>
          3. Từ một vài màn hình như hóa đơn bạn chọn dấu 3 chấm ở góc phải trên màn hình, chọn <Text style={{fontWeight:'bold'}}>Hướng Dẫn</Text> 
        </Text>
        <Text style={styles.noidungtitle}>
          4. Truy cập website <Text style={{ color:'green'}}>https://guide.vinahome.vn</Text> 
        </Text>
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'left',
      // justifyContent: 'center',
      padding: 16,
      backgroundColor:'#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'green'
    },
    title2: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    noidung: {
      fontSize: 16,
      textAlign: 'justify',
      marginBottom: 10,
      color:'green'
    },
    noidungtitle:{
      fontSize: 16,
      textAlign: 'justify',
      marginBottom: 10,
    }
  });
  
  export default Instruct;