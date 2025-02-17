import Footer from "./components/Footer"
import Header from "./components/Header"

export const metadata = {
  title: "Pokédex de FireRed & LeafGreen -- carregando",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pokédex de FireRed & LeafGreen - 151 pokemons </title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body style={{padding: 0, margin: 0, fontFamily: "sans-serif"}}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}