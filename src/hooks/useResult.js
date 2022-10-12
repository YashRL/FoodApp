import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
       const response = await yelp.get('/search',{
           params:{
               limits: 100,
               term : searchTerm,
               location: 'boston'
           }
       });
       setResult(response.data.businesses);
        } catch(err){
            setErrorMessage('Somthing went wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, result, errorMessage];
};