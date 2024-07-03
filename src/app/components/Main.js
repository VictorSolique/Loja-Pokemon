'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
import styles from "./main.module.css";
import Carregando from "./Carregando";
import ErrorGetData from "./ErrorGetData";

export default function Main() {
    const [listProducts, setListProducts] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [search, setSearch] = useState("");
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect( () => {
        const getProduct = async () => {
            try {
            const response = await fetch("http://localhost:3000/api");
            const data = await response.json();
            setListProducts(data);
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
            {listProducts.map((products) =>
                <div className={styles.card} key={products.id}>
                    <p className={styles.favorite}>
                        <a href={"/product/" + products.id}><span className="material-symbols-outlined">favorite</span></a>
                        </p>
                    <Image className={styles.img} width={150} height={150}
                    src={products.image} alt={products.name} priority />                    
                    <h4 style={{fontSize: 20, paddingBottom: 5, marginBottom: 0}}>{products.name}</h4>
                    <p style={{fontSize: 15, padding: 0, margin: 0}}> {products.species}</p>
                    
                    <p>{products.type}</p>               
                    <p>{products.height}</p>               
                    <p>{products.weight}</p>                          
                    
                </div>
            )}
        </main>
        </>
    )
}