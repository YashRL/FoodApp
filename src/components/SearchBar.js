import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={ style.background}>
            <Feather name="search" style={style.iconStyle}/>
            <TextInput
            style={style.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const style = StyleSheet.create ({
    background: {
        backgroundColor: '#D3D3D3',
        height: 45,
        marginHorizontal: 15,
        marginVertical:5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        marginHorizontal:5,
        fontSize: 16
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginStart:5
    }
});

export default SearchBar;