import { useParams } from "react-router-dom";
import { Header } from "../components/header";

export function CountryPage(){
    const {name} = useParams();
    return(
        <main>
            <Header title={`Country is: ${name}`}/>
        </main>
    );
};