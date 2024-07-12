import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <>
            <div className={styles.linhaTempo}>
                <h2 style={{ marginBottom: "20px", textAlign: "center"}}>Linha do Tempo Pokémon até o FireRed and LeafGreen</h2>
                <div className={styles.navTempo}>
                    <div>
                        <h3>1996</h3>
                        <Image src="https://img.pokemondb.net/boxes/avif/blue.avif" width={120} height={120} />
                        <p>Pokémon Red e Blue</p>
                    </div>
                    <div>
                        <h3>1997</h3>
                        <Image src="https://media.wired.com/photos/5926bf00cefba457b079b02f/master/pass/Screen-Shot-2016-09-09-at-5.49.40-PM-2.jpg" width={120} height={120} />
                        <p>Laçamento do Anime <br/> Pokémon no Japão</p>
                    </div>
                    <div>
                        <h3>1998</h3>
                        <Image src="https://img.pokemondb.net/boxes/avif/yellow.avif" width={120} height={120} />
                        <p>Pokémon Yellow</p>
                    </div>
                    <div>
                        <h3>2000</h3>
                        <Image src="https://img.pokemondb.net/boxes/avif/gold.avif" width={120} height={120} />
                        <p>Pokémon Gold e Silver</p>
                    </div>
                    <div>
                        <h3>2001</h3>
                        <Image src="https://img.pokemondb.net/boxes/avif/ruby.avif" width={120} height={120} />
                        <p>Pokémon Ruby e Sapphire</p>
                    </div>
                    <div>
                        <h3>2004</h3>
                        <Image src="https://img.pokemondb.net/boxes/avif/firered.avif" width={120} height={120} />
                        <p>Pokémon FireRed e LeafGreen</p>
                    </div>
                </div>
            </div>
            <footer style={{ backgroundColor: "#c0392b", color: "#fff" }}>
                <div className={styles.footer}>
                    <div>
                        <h4>Mais sobre o jogo</h4>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Jogabilidade</a></li>
                            <li><a href="#">Pokémons</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Informações</h4>
                        <ul>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Todos os Direitos Reservados</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2019 Pokédex FireRed and LeafGreen. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}