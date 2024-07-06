import styles from "./css.module.css"
import Image from "next/image";

export default async function Pokemon ( {params} ) {
    const response = await fetch("http://localhost:3000/api/" + params.id );
    const pokemons = await response.json();
    return (
        <div className={styles.main}>      
            <div className={styles.card} key={pokemons.id}>
                <Image className={styles.img} width={150} height={150}
                src={pokemons.image} alt={pokemons.name} priority />                    
                <h4 style={{fontSize: 20, paddingBottom: 5, marginBottom: 0}}>{pokemons.name}</h4>
                <p style={{fontSize: 15, padding: 0, margin: 0}}> {pokemons.species}</p>
                
                <p>{pokemons.type}</p>               
                <p>{pokemons.height}</p>               
                <p>{pokemons.weight}</p>                          
                
            </div>
        </div>
    )
}