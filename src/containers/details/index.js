import React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';
import { CONTAINER } from '../../assets/styles';

function Details({route}) {
    // const [title, setTitle] = useState("");
    // const [datalist, setDatlist] = useState([]);
    // useEffect(() => {
    //     // console.log("Props...", props);
    //     setTitle(props.route.params.title);
    // }, [])

    return(
        <SafeAreaView style={CONTAINER}>
            <Text>{route.params.title}</Text>
            <Text>Rating: {route.params.rating}</Text>
            <Text>Genre: {route.params.genre}</Text>

            <Image 
                source={require("../../assets/spongegar.png")}
                style={{ width: 100, height: 60 }}
            />
        </SafeAreaView>
    )
}

export default Details;