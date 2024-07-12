import styles from "./css.module.css"
import Image from "next/image";

export default async function Pokemon({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const pokemons = await response.json();
    let img;
    if (pokemons.id == 29) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif";
    } else if (pokemons.id == 32) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif";
    } else if (pokemons.id == 83) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif";
    } else if (pokemons.id == 122) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif";
    }
    else {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemons.name.toLowerCase() + ".gif";
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <pre>{JSON.stringify(pokemons, null, 2)}</pre>
                        {pokemons.evolution && <p>Evolution: {pokemons.evolution}</p>}
                    </div>
                </div>
                <div></div>
            </div>
            <main className={styles.main}>
                <div className={styles.pokemon}>
                    <Image className={styles.img} width={236} height={236} src={img} alt={pokemons.name} priority />
                </div>
                <div className={styles.atrib}>
                    <p>{pokemons.type}</p>
                    <p>{pokemons.height}</p>
                    <p>{pokemons.weight}</p>
                    <p>{pokemons.species}</p>
                </div>
                <div className={styles.evolucoes}>
                    <p>{typeof pokemons.evolution} {pokemons.evolution} dad</p>
                    {pokemons.evolution == 3 ? (
                        <>
                            <div>as</div>
                            <div>ass</div>
                            <div>ss</div>
                        </>
                    ) : pokemons.evolution == 2 ? (
                        <>
                            <div>asaa</div>
                            <div>tem 2 evolução</div>
                        </>
                    ) : (
                        <>
                            <div>aa</div>
                            <div>não tem evolução</div>
                        </>
                    )}
                </div>
            </main>
        </>


        // <div className={styles.main}>      
        //     <div className={styles.card} key={pokemons.id}>
        //         <Link href={"/pokemon/" + (pokemons.id + 1)} style={{color: "black"}}>Proximo Pokémon</Link>               
        //         <Image className={styles.img} width={118} height={118}
        //         src={img} alt={pokemons.name} priority />                    
        //         <h4 style={{fontSize: 20, paddingBottom: 5, marginBottom: 0}}>{pokemons.name}</h4>
        //         <p style={{fontSize: 15, padding: 0, margin: 0}}> {pokemons.species}</p>
        //         <p>{pokemons.type}</p>               
        //         <p>{pokemons.height}</p>               
        //         <p>{pokemons.weight}</p>           

        //         <Link href="/" style={{color: "black"}}>Retorne para Pokédex</Link>               

        //     </div>
        // </div>
    )
}