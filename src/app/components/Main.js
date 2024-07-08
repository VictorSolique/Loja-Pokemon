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
        const getProduct = async () => {
            try {
            const response = await fetch("http://localhost:3000/api");
            const data = await response.json();
            setlistPokemons(data);
            setListComplete(data);
            } catch {
                setErrorFetch(true);
            }
        }
        getProduct();
    }, [])

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
        <main className={styles.main}>   
            {listPokemons.map((item) =>
                <div className={styles.card} key={item.id}>
                    <Image className={styles.img} width={89} height={91}
                    src={item.image} alt={item.name} priority />  
                    <p style={{color: "#808080"}}># {item.id}</p>                  
                    <Link href={"/pokemon/" + item.id} className={styles.link}>
                        <h4 style={{fontSize: 18, display: "inline"}}>{item.name}</h4>
                    </Link>                        
                    <p> {item.type}</p>
                    <div style={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
                        <p style={{margin: 0, padding: 0, fontSize: 15, color: "#666"}}>Altura: <br/> {item.height} m</p>   
                        <p style={{margin: 0, padding: 0, fontSize: 15, color: "#666"}}>Peso: <br/> {item.weight} Kg</p>
                    </div>                                        
                    <p style={{fontSize: 15, color: "#aaa"}}>{item.species}</p>
                    
                </div>
            )}       
        </main>
        </>
    )
}