import styles from "./header.module.css"
import Image from "next/image";
import Link from "next/link";

export default function CarroselPokemon() {
    return (
        <div>
            <h2 className={styles.title}>Pokémons em Destaque</h2>
            <div className={styles.slideContainer}>                
                <Link href={"/pokemon/25"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/pikachu_icon-icons.com_67535.png" alt="pikachu" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/143"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/snorlax_icon-icons.com_67505.png" alt="snorlax" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/4"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/charmander_icon-icons.com_67576.png" alt="charmander" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/1"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/bulbasaur_icon-icons.com_67580.png" alt="bulbassaur" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/133"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/eevee_icon-icons.com_67563.png" alt="eevee" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/39"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/jigglypuff_icon-icons.com_67550.png" alt="jigglypuff" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/54"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/psyduck_icon-icons.com_67509.png" alt="psyduck" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/7"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/squirtle_icon-icons.com_67504.png" alt="squirtle" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/52"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/meowth_icon-icons.com_67543.png" alt="meowth" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/151"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/mew_icon-icons.com_67542.png" alt="mew" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/56"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/mankey_icon-icons.com_67546.png" alt="mankey" width={72} height={72} />
                </Link>                
                <Link href={"/pokemon/10"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/caterpie_icon-icons.com_67577.png" alt="caterpie" width={72} height={72} unoptimized />
                </Link>                
                <Link href={"/pokemon/63"} className={styles.slideItem}>
                    <Image src="https://cdn.icon-icons.com/icons2/851/PNG/96/abra_icon-icons.com_67592.png" alt="abra" width={72} height={72} unoptimized />
                </Link>
            </div>
        </div>

    )
}