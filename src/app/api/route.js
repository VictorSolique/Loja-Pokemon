import { NextResponse } from "next/server";

export const listaDePokemons = [
    {
        id: 1,
        image: "https://img.pokemondb.net/artwork/avif/bulbasaur.avif",
        name: "Bulbasaur",
        type: "Grass Poison",
        species: "Seed Pokémon",
        height: 0.7,
        weight: 6.9
    },
    {
        id: 2,
        image: "https://img.pokemondb.net/artwork/avif/ivysaur.avif",
        name: "Ivysaur",
        type: "Grass Poison",
        species: "Seed Pokémon",
        height: 1.0,
        weight: 13.0
    },
];

export async function GET(){
    return NextResponse.json(listaDePokemons)
}