import styles from "./css.module.css"
import Image from "next/image";
import Link from "next/link";

export default async function Pokemon({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const item = await response.json();
    const bla = await fetch("http://localhost:3000/api/" + (params.id - 1));
    const bla2 = await fetch("http://localhost:3000/api/" + (params.id - 2));
    const bla3 = await fetch("http://localhost:3000/api/" + (params.id - 3));
    const bla4 = await fetch("http://localhost:3000/api/" + (Number(params.id) + 1));
    const bla5 = await fetch("http://localhost:3000/api/" + (Number(params.id) + 2));
    const bla6 = await fetch("http://localhost:3000/api/" + (Number(params.id) + 3));

    const pokeAnt = await bla.json(); // Pega o pokémon anterior
    const pokeAnt2 = await bla2.json(); // Pega o pokémon anterior do anterior
    const pokeAnt3 = await bla3.json(); // Pega o pokémon anterior do anterior do anterior --> Eevee
    const pokeDps = await bla4.json(); // Pega o próximo pokémon 
    const pokeDps2 = await bla5.json(); // Pega o próximo do próximo pokémon 
    const pokeDps3 = await bla6.json(); // Pega o próximo do próximo do próximom pokémon --> Eevee 
    let img;
    let imgTras;
    if (item.id == 29) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif";
        imgTras = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-f.gif";
    } else if (item.id == 32) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif";
        imgTras = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-m.gif";
    } else if (item.id == 83) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif";
        imgTras = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/farfetchd.gif";
    } else if (item.id == 122) {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif";
        imgTras = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mr-mime.gif";
    }
    else {
        img = "https://img.pokemondb.net/sprites/black-white/anim/normal/" + item.name.toLowerCase() + ".gif";
        imgTras = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/" + item.name.toLowerCase() + ".gif";
    }

    return (
        <>
        <div className={styles.passarPokemon}>
            {item.id == 1 ? (<div></div>) : (
                <div>
                    <Link href={"/pokemon/" + (item.id - 1)}> 
                    <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
                    <p>#{item.id < 11 ? "00" + (item.id - 1) : item.id < 101 ? "0" + (item.id - 1) : (item.id - 1)}</p></Link>
                </div>  
            )}
            <div>
                <Link href="/" style={{fontSize: 16}}>Voltar a Pokédex</Link>
            </div>
            {item.id == 151 ? (<div></div>) : (
                <div style={{textAlign: "center"}}>
                    <Link href={"/pokemon/" + (item.id + 1)}>
                    <p>#{item.id < 9 ? "00" + (Number(item.id) + 1) : item.id < 99 ? "0" + (item.id + 1) : (Number(item.id) + 1)}</p>
                    <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
                    </Link>
                </div>
            )}       
        </div>
        <main className={styles.main}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={styles.pokemon}>
                    <div className={styles.pokemonNome}>
                        <h2>{item.name}</h2>
                        <p style={{ color: "#808080" }}># {item.id < 10 ? "00" + item.id : item.id < 100 ? "0" + item.id : item.id}</p>
                    </div>
                    <div className={styles.pokemonImg}>
                        <Image width={177} height={177} src={img} alt={item.name} priority />
                    </div>
                    <div className={styles.pokemonImgTras}>
                        <Image width={90} height={90} src={imgTras} alt={item.name} priority />
                    </div>

                </div>
                <div className={styles.atrib}>
                    <h1>Informações</h1>
                    <p>Tipo: {item.type}</p>
                    <p>Espécie: {item.species}</p>
                    <p>Altura: {item.height} m</p>
                    <p>Peso: {item.weight} kg</p>
                </div>
            </div>
            <div className={styles.evolucoes}>
                <h1>Linha Evolutiva</h1>
                {item.evolution.length == 3 ? item.evolution[0] ? (
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href={"/pokemon/" + (item.id + 1)}>
                                <Image width={90} height={90} src={pokeDps.image} alt={pokeDps.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href={"/pokemon/" + (item.id + 2)}>
                                <Image width={90} height={90} src={pokeDps2.image} alt={pokeDps2.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : item.evolution[1] ? (
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href={"/pokemon/" + (item.id - 1)}>
                                <Image width={90} height={90} src={pokeAnt.image} alt={pokeAnt.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href={"/pokemon/" + (item.id + 1)}>
                                <Image width={90} height={90} src={pokeDps.image} alt={pokeDps.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : (
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href={"/pokemon/" + (item.id - 2)}>
                                <Image width={90} height={90} src={pokeAnt2.image} alt={pokeAnt2.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href={"/pokemon/" + (item.id - 1)}>
                                <Image width={90} height={90} src={pokeAnt.image} alt={pokeAnt.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : item.evolution.length == 2 
                ? item.id == 135 ? ( // JOLTEON
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href={"/pokemon/" + (item.id - 2)}>
                                <Image width={90} height={90} src={pokeAnt2.image} alt={pokeAnt2.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : item.id == 136 ? ( // FLAREON
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href={"/pokemon/" + (item.id - 3)}>
                                <Image width={90} height={90} src={pokeAnt3.image} alt={pokeAnt3.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : item.evolution[0] ? (
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href={"/pokemon/" + (item.id + 1)}>
                                <Image width={90} height={90} src={pokeDps.image} alt={pokeDps.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : (
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href={"/pokemon/" + (item.id - 1)}>
                                <Image width={90} height={90} src={pokeAnt.image} alt={pokeAnt.name} priority />
                            </Link>
                        </div>
                        <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                    </nav>
                ) : item.id == 133 ? ( // EEVEE
                    <nav className={styles.pokeEvolution}>
                        <div>
                            <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <span class="material-symbols-outlined" style={{paddingInline: "15px"}}>south_west</span>
                            <span class="material-symbols-outlined" style={{paddingInline: "15px"}}>south</span>
                            <span class="material-symbols-outlined" style={{paddingInline: "15px"}}>south_east</span>
                        </div>
                        <div className={styles.pokeEevee}>                            
                            <Link href={"/pokemon/" + (item.id + 1)} style={{paddingInline: "5px"}}>
                                <Image width={90} height={90} src={pokeDps.image} alt={pokeDps.name} priority/>
                            </Link>
                            <Link href={"/pokemon/" + (item.id + 2)} style={{paddingInline: "5px"}}>
                                <Image width={90} height={90} src={pokeDps2.image} alt={pokeDps2.name} priority/>
                            </Link>
                            <Link href={"/pokemon/" + (item.id + 3)} style={{paddingInline: "5px"}}>
                                <Image width={90} height={90} src={pokeDps3.image} alt={pokeDps3.name} priority/>
                            </Link> 
                        </div>                        
                    </nav>
                ) : (
                    <nav className={styles.pokeEvolution}>
                        <div>
                           <Link href="#">
                                <Image className={styles.img} width={90} height={90} src={item.image} alt={item.name} priority />
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </main>
        </>
    )
}