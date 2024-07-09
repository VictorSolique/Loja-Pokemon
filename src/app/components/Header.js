import styles from "./header.module.css"
import Image from "next/image"
import CarroselPokemon from "./CarroselPokemon"

export default function Header() {
    return (
        <>
        <header>
            <div className={styles.background}>
                <div>                    
                    <Image src="https://fontmeme.com/permalink/240709/c358b5a922d521d63fd7c378a5067ebb.png" width={852} height={83} alt="Pokémon FireRed and LeafGreen" layout="intrinsic" />  
                </div>
                    <Image src="https://pokemonletsgo.pokemon.com/assets/img/how-to-play/hero-img.png"
                    width={1131} height={463} alt="Conjunto de Pokémons da 1° geração" layout="intrinsic"/>  
                <div>                    
                </div>
            </div>
            <div className={styles.ilha}>
                <nav className={styles.nav}>
                    <ul>
                        <li>Home</li>
                        <li>Pokedéx</li>
                        <li>Comunidade</li>
                        <li>Cadastrar</li>
                    </ul>
                </nav>
            </div>
        </header>

            
        
        <CarroselPokemon />
        </>
    )
}