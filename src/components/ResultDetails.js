import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const ResultDetails = ({ result }) => {
    return(
        <View style={style.constainer}>
            <Image style={style.image} source ={{ uri: result.image_url }}/>
            <Text style={style.name}>{ result.name }</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const style = StyleSheet.create({
    constainer:{
        marginLeft:15
    },
    image:{
        width:300,
        height:180,
        borderRadius:4,
        marginBottom:3
    },
    name:{
        fontWeight: 'bold',
        fontSize:14
    }
});

export default ResultDetails;
