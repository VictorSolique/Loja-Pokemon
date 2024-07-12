'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import styles from "./main.module.css";
import Carregando from "./Carregando";
import ErrorGetData from "./ErrorGetData";

export default function Main() {
    const [listPokemons, setlistPokemons] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [search, setSearch] = useState("");
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect( () => {
        const getPokemon = async () => {
            try {
            const response = await fetch("http://localhost:3000/api");
            const data = await response.json();
            setlistPokemons(data);
            setListComplete(data);
            } catch {
                setErrorFetch(true);
            }
        }
        getPokemon();
    }, [])

        useEffect(() => {
            searchText(search);
        }, [search]);

        const searchText = (text) => {
            setSearch(text);

            if ( text.trim() == "" ) {
                setlistPokemons(listComplete);
                return
            }
            const newList = listPokemons.filter((items) => 
                items.name.toUpperCase().trim().includes(search.toUpperCase().trim()) )
            setlistPokemons(newList);
        }

    if(errorFetch == true) {
        return <ErrorGetData />
    }
    if(listComplete[0] == null) {
        return (
            <>
            <Carregando />        
            </>
        )
    }

    return (
        <>
        <div className={styles.ordenar}>
            <div style={{textAlign: "center", marginBlock: "50px"}}>
                <h2 style={{boxShadow: "inset 0 0 0 2px #333, inset 0 0 0 4px #fff, inset 0 0 0 6px #333", display: "inline", padding: "15px", borderRadius: "5px"}}>Pokédex FireRed and LeafGreen</h2>
            </div>
            <div className={styles.menu2}>
                <input type="text" value={search} placeholder="Nome do pokémon" onChange={(e) => searchText(e.target.value)} />
            </div> 
        </div>
        <main className={styles.main}>  
            {listPokemons.map((item) =>
                <div className={styles.card} key={item.id}>
                    <Image className={styles.img} width={89} height={91}
                    src={item.image} alt={item.name} priority />
                    <p style={{color: "#808080"}}># {item.id < 10 ? "00" + item.id : item.id < 100 ? "0" + item.id : item.id }</p>                  
                    <Link href={"/pokemon/" + item.id} className={styles.link}>
                        <h4 style={{fontSize: 18, display: "inline"}}>{item.name}</h4>
                    </Link>                        
                    <p> {item.type}</p>
                    <div style={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
                        <p style={{margin: 0, padding: 0, fontSize: 15, color: "#666"}}>Altura: <br/> {item.height} m</p>   
                        <p style={{margin: 0, padding: 0, fontSize: 15, color: "#666"}}>Peso: <br/> {item.weight} Kg</p>
                    </div>                                        
                    <p style={{fontSize: 15, color: "#aaa"}}>{item.species}</p>
                    <p>{typeof item.evolution} {item.evolution} dad</p>

                    
                </div>
            )}       
        </main>
        </>
    )
}