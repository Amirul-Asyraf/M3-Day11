import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { CONTAINER } from '../../assets/styles';

function Details() {
    return(
        <SafeAreaView style={CONTAINER}>
            <Image 
                source={require("../../assets/spongegar.png")}
            />
        </SafeAreaView>
    )
}

export default Details;