import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Terms = () => {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>ĐIỀU KHOẢN SỬ DỤNG ỨNG DỤNG QUẢN LÝ PHÒNG TRỌ</Text>
        <Text style={styles.noidung}>
          Chào mừng bạn đến với ứng dụng quản lý phòng trọ của chúng tôi!
          Trước khi bạn bắt đầu sử dụng ứng dụng, hãy đọc kỹ và hiểu rõ các điều khoản sau đây:
        </Text>
        <Text style={styles.title2}>
          1. Chấp Nhận Điều Khoản Sử Dụng:
          </Text>
        <Text style={styles.noidung}>
          Bằng cách sử dụng ứng dụng quản lý phòng trọ, bạn đồng ý tuân thủ tất cả các điều khoản và điều kiện mà chúng tôi đề xuất trong tài liệu này.
        </Text>
        <Text style={styles.title2}>
          2. Quyền Lợi và Trách Nhiệm:
        </Text>
        <Text style={styles.noidung}>
          2.1. Bạn chịu trách nhiệm về thông tin cá nhân mà bạn cung cấp khi sử dụng ứng dụng.
        </Text>
        <Text style={styles.noidung}>
          2.2. Chúng tôi không chịu trách nhiệm về mất mát dữ liệu hoặc tổn thương do việc sử dụng ứng dụng.
        </Text>
        <Text style={styles.title2}>
          3. Quyền Riêng Tư:
          </Text>
        <Text style={styles.noidung}>
         3.1. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và chỉ sử dụng nó theo chính sách quyền riêng tư của chúng tôi.
        </Text>
        <Text style={styles.noidung}>
          3.2. Bạn đồng ý cho phép chúng tôi sử dụng thông tin của bạn để cung cấp dịch vụ và cải thiện chất lượng ứng dụng.
        </Text>
        <Text style={styles.title2}>4. Sử Dụng Hợp Lý:</Text>
        <Text style={styles.noidung}>
          4.1. Bạn cam kết sử dụng ứng dụng chỉ cho mục đích hợp pháp và không vi phạm bất kỳ luật lệ nào.
        </Text>
        <Text style={styles.noidung}>
          4.2. Bạn không được thực hiện bất kỳ hành động nào có thể gây hại hoặc ảnh hưởng đến ứng dụng hoặc người dùng khác.
        </Text>
        <Text style={styles.title2}>
          5. Thay Đổi Điều Khoản:
          </Text>
        <Text style={styles.noidung}>
          Chúng tôi có quyền thay đổi điều khoản sử dụng này bất cứ lúc nào. Bạn sẽ được thông báo trước về bất kỳ thay đổi nào, và việc tiếp tục sử dụng ứng dụng sau các thay đổi này sẽ coi như bạn chấp nhận các điều khoản mới.
        </Text>
        <Text style={styles.title2}>6. Chấm Dứt Sử Dụng:</Text>
        <Text style={styles.noidung}>
          Chúng tôi có quyền chấm dứt quyền sử dụng ứng dụng của bạn nếu chúng tôi nghi ngờ bạn vi phạm các điều khoản trong tài liệu này.
        </Text>
        <Text style={styles.title2}>
          7. Liên Hệ:
        </Text>
        <Text style={styles.noidung}>
          Nếu bạn có bất kỳ câu hỏi hoặc phản ánh nào, vui lòng liên hệ với chúng tôi theo địa chỉ <Text style={{color:'red'}}>Email: phuc.sang@gmail.com</Text>
        </Text>
        <Text style={styles.noidung}>
          Cảm ơn bạn đã sử dụng ứng dụng quản lý phòng trọ của chúng tôi!
        </Text>
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'left',
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
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    noidung: {
      fontSize: 16,
      textAlign: 'justify',
      marginBottom: 10,
    },
  });
  
  export default Terms;