import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"
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
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Pokédex</Link></li>
                        <li><Link href="#">Comunidade</Link></li>
                        <li><Link href="#">Cadastrar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

            
        
        <CarroselPokemon />
        </>
    )
}