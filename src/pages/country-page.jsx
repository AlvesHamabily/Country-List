import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { useEffect } from "react";

export function CountryPage(){
    const {name} = useParams();

    useEffect(() =>{
        console.log("Country", name);
    }, [name]);
    
    return(
        <main>
            <Header title={`Country is: ${name}`}/>
        </main>
    );
};