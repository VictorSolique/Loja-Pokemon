import styles from "./header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={""} width={100} height={100} />
                <h3>Pokedéx - FireRed & LeafGreen</h3>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </nav>
        </header>
    )
}