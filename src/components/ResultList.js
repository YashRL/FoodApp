import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const ResultList = ({ title, result }) => {
    return(
        <View style={style.container}>
            <Text style = {style.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultDetails result={item} />;
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:6
    },
    container:{
        marginBottom:10,
    }
});

export default ResultList;