import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient() {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.button}
            >
                <Text style={styles.text}>SIGN IN</Text>
            </LinearGradient>


        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        width: 200,
        alignItems:'center',
        marginTop: 20,
        
        
    },
    text:{
        fontSize: 14,
        color: '#fff',
        // marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
        fontWeight: 'bold'
    },

    button:{
        // marginTop: 20,
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
    },
})