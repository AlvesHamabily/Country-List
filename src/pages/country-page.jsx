import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { useEffect, useState} from "react";

export function CountryPage(){
    const {name} = useParams();
    const [countryDetail, setCountryDetail] = useState();


    async function fetchCountriesDetail() {
        const response = await fet(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();
        const countryDetail = data[0];
        setCountryDetail(countryDetail);
    }

    useEffect(() =>{
        console.log("Country", name);
    }, [name]);

    return(
        <main>
            <Header title={`Country is: ${name}`}/>
            <pre>{JSON.stringify(countryDetail, null,2)}</pre>
        </main>
    );
};