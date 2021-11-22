import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CONTAINER } from '../../assets/styles';

const ABOUTDATA = [
    {
        title: "Title One",
        content: 'this is content for section One',
    },
    {
        title: "Title Two",
        content: 'this is content for section Two',
    },
    {
        title: "Title Three",
        content: 'this is content for section Three',
    },
    {
        title: "Title Four",
        content: 'this is content for section Four',
    }
]

function About() {
    function _renderListView(data) {
        return (
            <View key={data.id}>
                <Text>{data.title}</Text>
                <Text>{data.content}</Text>

            </View>
        )
    }

    function _renderEmptyView() {
        return(
            <View
                style={{
                    backgroundColor: 'salmon',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>Sorry come back later.</Text>
                <Text>No data now.</Text>
            </View>
        )
    }
    return (
        <View style={{flex:1}}>
            <Text>This is About</Text>
            <FlatList 
                // data={[]}
                data={ABOUTDATA}
                renderItem={( {item} ) => _renderListView(item)}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => _renderEmptyView() }
            />
        </View>

    )
}

export default About;