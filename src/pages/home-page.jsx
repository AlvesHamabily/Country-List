import { useEffect} from "react";

import { Header } from "../components/header";
import { CountryItem } from "../components/country-item";
import { useState } from "react";

export function HomePage(){
    const [list, setList] = useState([]);

    async function fetchCountries(){
        const newLocal = "https://restcountries.com/v3.1/all?fields=name,flags";
        const req = await fetch(
            newLocal
        );

        const data = await req.json();
        setList(data);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

return (
    <main>
        <Header title="Lista de Países"/>
        <ul className="list-container">
            {list.map((item)=> {
                return(
                    <CountryItem
                    key={item.flags.png}
                    url={item.flags.png}
                    name={item.name.common}
                    />
                )
            })};
        </ul>
    </main>
    )};