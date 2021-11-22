import React from 'react';
import { View, Text, Button } from 'react-native';
import { CONTAINER } from '../../assets/styles';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../actions/counterSlice';


function Contact() {
    const count = useSelector((state) => state.count); //mapStateToProps
    console.log(count);
    const dispatch = useDispatch(); //mapDispatchToProps

    function add(){
        dispatch(increment());
        // console.log(count)
    }

    return(
        <View style={CONTAINER}>
            <Text style={{ fontSize: 16, marginVertical: 20 }}>This is Contact</Text>

            <Text style={{ fontSize: 36, marginVertical: 20 }}>Count: {count.count}</Text>

            {/* <Button title="Increment" onPress={() => dispatch(increment())} /> */}
            <Button title="Increment" onPress={() => add()} />


            <Button title="Decrement" onPress={() => dispatch(decrement())}/>

        </View>

    )
}

export default Contact;