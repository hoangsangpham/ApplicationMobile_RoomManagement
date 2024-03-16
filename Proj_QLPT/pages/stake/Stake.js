import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBar}>
      <View style={{ width: `${progress}%`, backgroundColor: 'green', height: '100%', borderRadius: 5 }} />
    </View>
  );
};

function Stake({ navigation }) {
  const [installProgress, setInstallProgress] = useState(1);
  const [animatedValue] = useState(new Animated.Value(0));
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setInstallProgress(prevProgress => {
        const newProgress = prevProgress + 3;
        return newProgress > 79 ? 79 : newProgress;
      });
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: -screenWidth,
        duration: 13000,
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue, screenWidth]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, { transform: [{ translateX: animatedValue }] }]}>
        <Text style={styles.text}>
          <Text>Vui lòng quay lại sau khi ứng dụng được cập nhật xong!</Text>
        </Text>
      </Animated.View>
      <AntDesign style={styles.icon} name="android1" size={150} color="green" />
      <Text style={styles.text1}>Ứng dụng đang được cập nhật</Text>
      <Text style={styles.text1}>{installProgress}%</Text>
      <ProgressBar progress={installProgress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  progressBar: {
    width: '85%',
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginTop: 10,
    overflow: 'hidden',
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: 'green',
    flexWrap: 'nowrap', 
    marginLeft: 20,
  },
  text1: {
    fontSize: 16,
    color: '#000',
    flexWrap: '#000', 
    marginLeft: 30,
    
    
  },
  animatedContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    overflow: 'hidden',
  },
  icon: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 200,
  },
});

export default Stake;