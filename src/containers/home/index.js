import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions, Touchable, ListViewBase } from 'react-native';
// import { INPUT_STYLE, CONTAINER, BUTTON_STYLE_LOGIN } from '../../assets/styles';

const DATA = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 8", "Data 9", "Data 10"];

const images = {
    logo: require("../../assets/spongegar.png"),
    rating: 8.0,
    genre: 'Comedy'
}

function Home(props) {
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
            <ScrollView
                // horizontal = {true}
                showsVerticalScrollIndicator = {false}
                // showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {{
                    paddingHorizontal: 20,
                    flexWrap: 'wrap',
                    flexDirection: "row",
                    justifyContent: 'space-around'
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
        width: 165,
        // width: Dimensions.get('window').width - 50,
        height: 250,
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
    }
}

export default Home;