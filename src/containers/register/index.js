import React from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { INPUT_STYLE, CONTAINER, BUTTON_STYLE_REGISTER } from '../../assets/styles';

function Register() {
    return(
        <SafeAreaView style={ CONTAINER }>
            <Image 
                source={require('../../assets/spongegar.png')}
                style={{ width: 100, height: 60}}
            />
            <Text style={{ marginTop: 40 }}>Register Now</Text>

            <TextInput placeholder="Username" keyboardType="default" style={INPUT_STYLE}/>
            <TextInput placeholder="Password" keyboardType="default" secureTextEntry={true} style={INPUT_STYLE}/>
            <TextInput placeholder="Email" keyboardType="default" style={INPUT_STYLE}/>

            <TouchableOpacity style={BUTTON_STYLE_REGISTER}>
                <Text>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Register;