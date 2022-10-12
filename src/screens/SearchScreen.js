import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResult();
    
    const filterByPrice = (price) => {
        return result.filter(result => {
            return result.price === price;
        });
    };
    


    return(
        <View style={{ flex:1 }}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {result.length} results</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList result={filterByPrice('$')} title="Cost Effective"/>
                <ResultList result={filterByPrice('$$')} title="Bit Pricer"/>
                <ResultList result={filterByPrice('$$$')} title="Rahis Baap ki aulad"/>
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create ({});

export default SearchScreen;