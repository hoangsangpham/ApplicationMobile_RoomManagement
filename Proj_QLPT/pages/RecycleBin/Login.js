import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
// import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
// const {width, height} = Dimensions.get('window')

export default function App() {

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}> Sign In Your Account</Text>
      <TextInput 
        placeholder='joih@gmail.com'
        style={styles.textInput}
      />
      <TextInput 
        placeholder='password'
        style={styles.textInput}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 90,
    color: '#34434D',
    fontWeight: 'bold',

  },
  subTitle:{
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    // borderWidth: 1,
    // borderColor: 'gray',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30  ,
    backgroundColor: '#fff',
  }

});