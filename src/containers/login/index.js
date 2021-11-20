import React from 'react';
import { Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { INPUT_STYLE, CONTAINER, BUTTON_STYLE_LOGIN } from '../../assets/styles';

function Login(props) {
    return (
        <SafeAreaView style={CONTAINER}>
            <Image 
                source={require("../../assets/spongegar.png")}
                style={{ width: 100, height:60 }}
            />
            <Text>This is Login</Text>

            <TextInput placeholder="Username" keyboardType="default" style={INPUT_STYLE}/>
            <TextInput placeholder="Password" keyboardType="default" secureTextEntry={true} style={INPUT_STYLE}/>

            {/* <TextInput placeholder="Password" keyboardType="number-pad"/> */}

            <Button title="Login"></Button>

            <TouchableOpacity style={BUTTON_STYLE_LOGIN}>
                <Text>Login Here</Text>
            </TouchableOpacity>

            <TouchableOpacity style={BUTTON_STYLE_LOGIN} onPress={() => props.navigation.navigate("Register")}>
                <Text>Go to Register Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={BUTTON_STYLE_LOGIN} onPress={() => props.navigation.navigate("Home")}>
                <Text>Go to Home Screen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;