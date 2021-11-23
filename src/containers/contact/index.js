import React, { useState } from 'react';
import { View, Text, Button, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { CONTAINER } from '../../assets/styles';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../actions/counterSlice';

import ContactList from '../../components/ContactList';

const CONTACTDATA = [
    {
        title: 'McDonald',
        contact: '1-300-888-00',
    },
    {
        title: 'Domino',
        contact: '1-333-888-333',
    },
    {
        title: 'KFC',
        contact: '1-888-23-24',
    },
    {
        title: 'Pizza',
        contact: '1-22-33-444',
    }
]

function Contact(props) {
    const count = useSelector((state) => state.count); //mapStateToProps
    const dispatch = useDispatch(); //mapDispatchToProps

    const [refresh, setRefresh] = useState(false);

    function onRefresh() {
        console.log("App is loading");
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        }, 5000);
    }

    return(
        // <View style={CONTAINER}>
        //     <Text style={{ fontSize: 16, marginVertical: 20 }}>This is Contact</Text>

        //     <Text style={{ fontSize: 36, marginVertical: 20 }}>Count: {count.count}</Text>

        //     {/* <Button title="Increment" onPress={() => dispatch(increment())} /> */}
        //     <Button title="Increment" onPress={() => dispatch(increment())} />

        //     <Button title="Decrement" onPress={() => dispatch(decrement())}/>
        <View style = {{ flex: 1}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Bag")}>
                <Text>Bag</Text>
            </TouchableOpacity>
            <SwipeListView 
                data = {CONTACTDATA}
                renderItem = {(data, rowMap) => 
                    <ContactList 
                        style={styles.rowFront}
                        data={data.item} 
                        title={data.item.title} 
                        phone={data.item.contact} 
                    />
                }
                renderHiddenItem={(data, rowMap) => {
                    return(
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={{ backgroundColor: 'green'}}>
                                <Text>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: 'red'}}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                leftOpenValue={75}
                rightOpenValue={-75}
                keyExtractor = {(item) => item.id}
                refreshControl={
                    <RefreshControl 
                        refreshing={refresh} 
                        onRefresh={() => onRefresh()}
                        size={100}
                        tintColor='salmon'
                        title="Getting data..."
                    />
                }
            />
        </View>

        // {/* </View> */}

    )
}

const styles = {
    rowFront: {
        alignItems: 'center',
        backgroundColor: "#CCC",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    }
}

export default Contact;