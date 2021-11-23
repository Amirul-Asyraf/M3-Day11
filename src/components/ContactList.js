import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions/counterSlice';

function ContactList(data) {
    const dispatch = useDispatch(); //mapDispatchToProps

    return (
        <View style={styles.contactHolder}>
            <View style={styles.contactDetails}>
                <View style={styles.contactImg}></View>
                <View>
                    <Text style={{ fontWeight: '800'}}>{data.title}</Text>
                    <Text>Phone Number: {data.phone}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.contactBtn} onPress={() => dispatch(increment())}>
                <Text style= {{padding: 6, textAlign: 'center'}}>Order Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    contactHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        padding: 15,
        marginVertical: 15,
        backgroundColor: 'lightgrey'
    },
    contactImg: {
        backgroundColor: 'blue',
        width: 80,
        height: 80,
        marginRight: 20,
    },
    contactBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'salmon',
        textAlign: 'center',

    },
    contactDetails: {
        flexDirection: 'row'
    }
}

export default ContactList;