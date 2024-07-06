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
                    <p className={styles.favorite}>
                        <Link href={"/pokemon/" + item.id}><span className="material-symbols-outlined">favorite</span></Link>
                        </p>
                    <Image className={styles.img} width={150} height={150}
                    src={item.image} alt={item.name} priority />                    
                    <h4 style={{fontSize: 20, paddingBottom: 5, marginBottom: 0}}>{item.name}</h4>
                    <p style={{fontSize: 15, padding: 0, margin: 0}}> {item.species}</p>
                    
                    <p>{item.type}</p>               
                    <p>{item.height}</p>               
                    <p>{item.weight}</p>                          
                    
                </div>
            )}
        </main>
        </>
    )
}