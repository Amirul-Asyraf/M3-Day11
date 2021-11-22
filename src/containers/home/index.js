import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions, Touchable, ListViewBase, TextInput } from 'react-native';

import { fetchMovie } from '../../actions';

const DATA = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 8", "Data 9", "Data 10"];

const images = {
    logo: require("../../assets/spongegar.png"),
    rating: 8.0,
    genre: 'Comedy'
}

function Home(props) {
    const [state, setState] = useState({
        s: 'Enter a movie ...',
        results: [],
        selected: {}
    });

    function _renderListView(data) {
        return (
            <View style={styles.cardStyle}>
                <Image 
                    source={images.logo}
                    style={{ width: 100, height: 60, marginBottom: 20, marginLeft: 100/5}}
                />
                <View>
                    <Text style={{fontSize: 15}}>{data}</Text>
                    <Text>Rating: {images.rating}</Text>
                    <Text>Genre: {images.genre}</Text>
                </View>

                <TouchableOpacity onPress = {() => props.navigation.navigate("Details", { title: data, rating: images.rating, genre: images.genre })} style={styles.detailsButton}>
                    <Text>More Details</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ 
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 36 }}>InvokeMDB List</Text>
                <TextInput 
                    style={styles.searchBox}
                    onChangeText={text => setState(prevState => {
                        return {...prevState, s: text}
                    })}
                    onSubmitEditing={search}
                    value={state.s}
                />
            </View>
            <ScrollView
                // horizontal = {true}
                showsVerticalScrollIndicator = {false}
                // showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {{
                    paddingHorizontal: 20,
                    // flexWrap: 'wrap',
                    flexDirection: "column",
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                {/* <Text>This is Home page</Text> */}
                { DATA.map((list) => _renderListView(list)) }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    cardStyle: {
        // width: 165,
        width: Dimensions.get('window').width - 50,
        height: 600,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        shadowOffSet: { width: 2, height: 4},
        shadowColor: "#171717",
        shadowOpacity: 0.3,
        shadowRadius: 3
    },

    detailsButton: {
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 6
    },

    searchBox: {
        fontSize: 20,
        fontWeight: '300',
        padding: 20,
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 40
    }
}

export default Home;