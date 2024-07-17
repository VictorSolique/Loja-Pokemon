import { NextResponse } from "next/server";

export const listaDePokemons = [
    {
      id: 1,
      image: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
      name: "Bulbasaur",
      type: "Grass Poison",
      species: "Seed Pokémon",
      height: "0.7",
      weight: 6.9,
      evolution: [true, false, false]
    },
    {
      id: 2,
      image: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
      name: "Ivysaur",
      type: "Grass Poison",
      species: "Seed Pokémon",
      height: "1.0",
      weight: 13.0,
      evolution: [false, true, false]
    },
    {
      id: 3,
      image: "https://img.pokemondb.net/sprites/black-white/normal/venusaur.png",
      name: "Venusaur",
      type: "Grass Poison",
      species: "Seed Pokémon",
      height: "2.0",
      weight: 100.0,
      evolution: [false, false, true]
    },
    {
      id: 4,
      image: "https://img.pokemondb.net/sprites/black-white/normal/charmander.png",
      name: "Charmander",
      type: "Fire",
      species: "Lizard Pokémon",
      height: "0.6",
      weight: 8.5,
      evolution: [true, false, false]
    },
    {
      id: 5,
      image: "https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png",
      name: "Charmeleon",
      type: "Fire",
      species: "Flame Pokémon",
      height: "1.1",
      weight: 19.0,
      evolution: [false, true, false]
    },
    {
      id: 6,
      image: "https://img.pokemondb.net/sprites/black-white/normal/charizard.png",
      name: "Charizard",
      type: "Fire Flying",
      species: "Flame Pokémon",
      height: "1.7",
      weight: 90.5,
      evolution: [false, false, true]
    },
    {
      id: 7,
      image: "https://img.pokemondb.net/sprites/black-white/normal/squirtle.png",
      name: "Squirtle",
      type: "Water",
      species: "Tiny Turtle Pokémon",
      height: "0.5",
      weight: 9.0,
      evolution: [true, false, false]
    },
    {
      id: 8,
      image: "https://img.pokemondb.net/sprites/black-white/normal/wartortle.png",
      name: "Wartortle",
      type: "Water",
      species: "Turtle Pokémon",
      height: "1.0",
      weight: 22.5,
      evolution: [false, true, false]
    },
    {
      id: 9,
      image: "https://img.pokemondb.net/sprites/black-white/normal/blastoise.png",
      name: "Blastoise",
      type: "Water",
      species: "Shellfish Pokémon",
      height: "1.6",
      weight: 85.5,
      evolution: [false, false, true]
    },
    {
      id: 10,
      image: "https://img.pokemondb.net/sprites/black-white/normal/caterpie.png",
      name: "Caterpie",
      type: "Bug",
      species: "Worm Pokémon",
      height: "0.3",
      weight: 2.9,
      evolution: [true, false, false]
    },
    {
      id: 11,
      image: "https://img.pokemondb.net/sprites/black-white/normal/metapod.png",
      name: "Metapod",
      type: "Bug",
      species: "Cocoon Pokémon",
      height: "0.7",
      weight: 9.9,
      evolution: [false, true, false]
    },
    {
      id: 12,
      image: "https://img.pokemondb.net/sprites/black-white/normal/butterfree.png",
      name: "Butterfree",
      type: "Bug Flying",
      species: "Butterfly Pokémon",
      height: "1.1",
      weight: 32.0,
      evolution: [false, false, true]
    },
    {
      id: 13,
      image: "https://img.pokemondb.net/sprites/black-white/normal/weedle.png",
      name: "Weedle",
      type: "Bug Poison",
      species: "Hairy Pokémon",
      height: "0.3",
      weight: 3.2,
      evolution: [true, false, false]
    },
    {
      id: 14,
      image: "https://img.pokemondb.net/sprites/black-white/normal/kakuna.png",
      name: "Kakuna",
      type: "Bug Poison",
      species: "Cocoon Pokémon",
      height: "0.6",
      weight: 10.0,
      evolution: [false, true, false]
    },
    {
      id: 15,
      image: "https://img.pokemondb.net/sprites/black-white/normal/beedrill.png",
      name: "Beedrill",
      type: "Bug Poison",
      species: "Poison Bee Pokémon",
      height: "1.0",
      weight: 29.5,
      evolution: [false, false, true]
    },
    {
      id: 16,
      image: "https://img.pokemondb.net/sprites/black-white/normal/pidgey.png",
      name: "Pidgey",
      type: "Normal Flying",
      species: "Tiny Bird Pokémon",
      height: "0.3",
      weight: 1.8,
      evolution: [true, false, false]
    },
    {
      id: 17,
      image: "https://img.pokemondb.net/sprites/black-white/normal/pidgeotto.png",
      name: "Pidgeotto",
      type: "Normal Flying",
      species: "Bird Pokémon",
      height: "1.1",
      weight: 30.0,
      evolution: [false, true, false]
    },
    {
      id: 18,
      image: "https://img.pokemondb.net/sprites/black-white/normal/pidgeot.png",
      name: "Pidgeot",
      type: "Normal Flying",
      species: "Bird Pokémon",
      height: "1.5",
      weight: 39.5,
      evolution: [false, false, true]
    },
    {
      id: 19,
      image: "https://img.pokemondb.net/sprites/black-white/normal/rattata.png",
      name: "Rattata",
      type: "Normal",
      species: "Mouse Pokémon",
      height: "0.3",
      weight: 3.8,
      evolution: [true, false]
    },
    {
      id: 20,
      image: "https://img.pokemondb.net/sprites/black-white/normal/raticate.png",
      name: "Raticate",
      type: "Normal",
      species: "Mouse Pokémon",
      height: "0.7",
      weight: 18.5,
      evolution: [false, true]
    },
    {
      id: 21,
      image: "https://img.pokemondb.net/sprites/black-white/normal/spearow.png",
      name: "Spearow",
      type: "Normal Flying",
      species: "Tiny Bird Pokémon",
      height: "0.3",
      weight: 2.0,
      evolution: [true, false]
    },
    {
      id: 22,
      image: "https://img.pokemondb.net/sprites/black-white/normal/fearow.png",
      name: "Fearow",
      type: "Normal Flying",
      species: "Beak Pokémon",
      height: "1.2",
      weight: 38.0,
      evolution: [false, true]
    },
    {
      id: 23,
      image: "https://img.pokemondb.net/sprites/black-white/normal/ekans.png",
      name: "Ekans",
      type: "Poison",
      species: "Snake Pokémon",
      height: "2.0",
      weight: 6.9,
      evolution: [true, false]
    },
    {
      id: 24,
      image: "https://img.pokemondb.net/sprites/black-white/normal/arbok.png",
      name: "Arbok",
      type: "Poison",
      species: "Cobra Pokémon",
      height: "3.5",
      weight: 65.0,
      evolution: [false, true]
    },
    {
      id: 25,
      image: "https://img.pokemondb.net/sprites/black-white/normal/pikachu.png",
      name: "Pikachu",
      type: "Electric",
      species: "Mouse Pokémon",
      height: "0.4",
      weight: 6.0,
      evolution: [true, false]
    },
    {
      id: 26,
      image: "https://img.pokemondb.net/sprites/black-white/normal/raichu.png",
      name: "Raichu",
      type: "Electric",
      species: "Mouse Pokémon",
      height: "0.8",
      weight: 30.0,
      evolution: [false, true]
    },
    {
      id: 27,
      image: "https://img.pokemondb.net/sprites/black-white/normal/sandshrew.png",
      name: "Sandshrew",
      type: "Ground",
      species: "Mouse Pokémon",
      height: "0.6",
      weight: 12.0,
      evolution: [true, false]
    },
    {
      id: 28,
      image: "https://img.pokemondb.net/sprites/black-white/normal/sandslash.png",
      name: "Sandslash",
      type: "Ground",
      species: "Mouse Pokémon",
      height: "1.0",
      weight: 29.5,
      evolution: [false, true]
    },
    {
      id: 29,
      image: "https://img.pokemondb.net/sprites/black-white/normal/nidoran-f.png",
      name: "Nidoran♀",
      type: "Poison",
      species: "Poison Pin Pokémon",
      height: "0.4",
      weight: 7.0,
      evolution: [true, false, false]
    },
    {
      id: 30,
      image: "https://img.pokemondb.net/sprites/black-white/normal/nidorina.png",
      name: "Nidorina",
      type: "Poison",
      species: "Poison Pin Pokémon",
      height: "0.8",
      weight: 20.0,
      evolution: [false, true, false]
    },
    {
      id: 31,
      image: "https://img.pokemondb.net/sprites/black-white/normal/nidoqueen.png",
      name: "Nidoqueen",
      type: "Poison Ground",
      species: "Drill Pokémon",
      height: "1.3",
      weight: 60.0,
      evolution: [false, false, true]
    },
    {
      id: 32,
      image: "https://img.pokemondb.net/sprites/black-white/normal/nidoran-m.png",
      name: "Nidoran♂",
      type: "Poison",
      species: "Poison Pin Pokémon",
      height: "0.5",
      weight: 9.0,
      evolution: [true, false, false]
    },
    {
      id: 33,
      image: "https://img.pokemondb.net/sprites/black-white/normal/nidorino.png",
      name: "Nidorino",
      type: "Poison",
      species: "Poison Pin Pokémon",
      height: "0.9",
      weight: 19.5,
      evolution: [false, true, false]
    },
    {
      id: 34,
      image: "https://img.pokemondb.net/sprites/black-white/normal/nidoking.png",
      name: "Nidoking",
      type: "Poison Ground",
      species: "Drill Pokémon",
      height: "1.4",
      weight: 62.0,
      evolution: [false, false, true]
    },
    {
      id: 35,
      image: "https://img.pokemondb.net/sprites/black-white/normal/clefairy.png",
      name: "Clefairy",
      type: "Fairy",
      species: "Fairy Pokémon",
      height: "0.6",
      weight: 7.5,
      evolution: [true, false]
    },
    {
      id: 36,
      image: "https://img.pokemondb.net/sprites/black-white/normal/clefable.png",
      name: "Clefable",
      type: "Fairy",
      species: "Fairy Pokémon",
      height: "1.3",
      weight: 40.0,
      evolution: [false, true]
    },
    {
      id: 37,
      image: "https://img.pokemondb.net/sprites/black-white/normal/vulpix.png",
      name: "Vulpix",
      type: "Fire",
      species: "Fox Pokémon",
      height: "0.6",
      weight: 9.9,
      evolution: [true, false]
    },
    {
      id: 38,
      image: "https://img.pokemondb.net/sprites/black-white/normal/ninetales.png",
      name: "Ninetales",
      type: "Fire",
      species: "Fox Pokémon",
      height: "1.1",
      weight: 19.9,
      evolution: [false, true]
    },
    {
      id: 39,
      image: "https://img.pokemondb.net/sprites/black-white/normal/jigglypuff.png",
      name: "Jigglypuff",
      type: "Normal Fairy",
      species: "Balloon Pokémon",
      height: "0.5",
      weight: 5.5,
      evolution: [true, false]
    },
    {
      id: 40,
      image: "https://img.pokemondb.net/sprites/black-white/normal/wigglytuff.png",
      name: "Wigglytuff",
      type: "Normal Fairy",
      species: "Balloon Pokémon",
      height: "1.0",
      weight: 12.0,
      evolution: [false, true]
    },
    {
      id: 41,
      image: "https://img.pokemondb.net/sprites/black-white/normal/zubat.png",
      name: "Zubat",
      type: "Poison Flying",
      species: "Bat Pokémon",
      height: "0.8",
      weight: 7.5,
      evolution: [true, false]
    },
    {
      id: 42,
      image: "https://img.pokemondb.net/sprites/black-white/normal/golbat.png",
      name: "Golbat",
      type: "Poison Flying",
      species: "Bat Pokémon",
      height: "1.6",
      weight: 55.0,
      evolution: [false, true]
    },
    {
      id: 43,
      image: "https://img.pokemondb.net/sprites/black-white/normal/oddish.png",
      name: "Oddish",
      type: "Grass Poison",
      species: "Weed Pokémon",
      height: "0.5",
      weight: 5.4,
      evolution: [true, false, false]
    },
    {
      id: 44,
      image: "https://img.pokemondb.net/sprites/black-white/normal/gloom.png",
      name: "Gloom",
      type: "Grass Poison",
      species: "Weed Pokémon",
      height: "0.8",
      weight: 8.6,
      evolution: [false, true, false]
    },
    {
      id: 45,
      image: "https://img.pokemondb.net/sprites/black-white/normal/vileplume.png",
      name: "Vileplume",
      type: "Grass Poison",
      species: "Flower Pokémon",
      height: "1.2",
      weight: 18.6,
      evolution: [false, false, true]
    },
    {
      id: 46,
      image: "https://img.pokemondb.net/sprites/black-white/normal/paras.png",
      name: "Paras",
      type: "Bug Grass",
      species: "Mushroom Pokémon",
      height: "0.3",
      weight: 5.4,
      evolution: [true, false]
    },
    {
        id: 47,
        image: "https://img.pokemondb.net/sprites/black-white/normal/parasect.png",
        name: "Parasect",
        type: "Bug Grass",
        species: "Mushroom Pokémon",
        height: "1.0",
        weight: 29.5,
        evolution: [false, true]
    },
    {
        id: 48,
        image: "https://img.pokemondb.net/sprites/black-white/normal/venonat.png",
        name: "Venonat",
        type: "Bug Poison",
        species: "Insect Pokémon",
        height: "1.0",
        weight: 30.0,
        evolution: [true, false]
    },
    {
        id: 49,
        image: "https://img.pokemondb.net/sprites/black-white/normal/venomoth.png",
        name: "Venomoth",
        type: "Bug Poison",
        species: "Poison Moth Pokémon",
        height: "1.5",
        weight: 12.5,
        evolution: [false, true]
    },
    {
        id: 50,
        image: "https://img.pokemondb.net/sprites/black-white/normal/diglett.png",
        name: "Diglett",
        type: "Ground",
        species: "Mole Pokémon",
        height: "0.2",
        weight: 0.8,
        evolution: [true, false]
    },
    {
        id: 51,
        image: "https://img.pokemondb.net/sprites/black-white/normal/dugtrio.png",
        name: "Dugtrio",
        type: "Ground",
        species: "Mole Pokémon",
        height: "0.7",
        weight: 33.3,
        evolution: [false, true]
    },
    {
        id: 52,
        image: "https://img.pokemondb.net/sprites/black-white/normal/meowth.png",
        name: "Meowth",
        type: "Normal",
        species: "Scratch Cat Pokémon",
        height: "0.4",
        weight: 4.2,
        evolution: [true, false]
    },
    {
        id: 53,
        image: "https://img.pokemondb.net/sprites/black-white/normal/persian.png",
        name: "Persian",
        type: "Normal",
        species: "Classy Cat Pokémon",
        height: "1.0",
        weight: 32.0,
        evolution: [false, true]
    },
    {
        id: 54,
        image: "https://img.pokemondb.net/sprites/black-white/normal/psyduck.png",
        name: "Psyduck",
        type: "Water",
        species: "Duck Pokémon",
        height: "0.8",
        weight: 19.6,
        evolution: [true, false]
    },
    {
        id: 55,
        image: "https://img.pokemondb.net/sprites/black-white/normal/golduck.png",
        name: "Golduck",
        type: "Water",
        species: "Duck Pokémon",
        height: "1.7",
        weight: 76.6,
        evolution: [false, true]
    },
    {
        id: 56,
        image: "https://img.pokemondb.net/sprites/black-white/normal/mankey.png",
        name: "Mankey",
        type: "Fighting",
        species: "Pig Monkey Pokémon",
        height: "0.5",
        weight: 28.0,
        evolution: [true, false]
    },
    {
        id: 57,
        image: "https://img.pokemondb.net/sprites/black-white/normal/primeape.png",
        name: "Primeape",
        type: "Fighting",
        species: "Pig Monkey Pokémon",
        height: "1.0",
        weight: 32.0,
        evolution: [false, true]
    },
    {
        id: 58,
        image: "https://img.pokemondb.net/sprites/black-white/normal/growlithe.png",
        name: "Growlithe",
        type: "Fire",
        species: "Puppy Pokémon",
        height: "0.7",
        weight: 19.0,
        evolution: [true, false]
    },
    {
        id: 59,
        image: "https://img.pokemondb.net/sprites/black-white/normal/arcanine.png",
        name: "Arcanine",
        type: "Fire",
        species: "Legendary Pokémon",
        height: "1.9",
        weight: 155.0,
        evolution: [false, true]
    },
    {
        id: 60,
        image: "https://img.pokemondb.net/sprites/black-white/normal/poliwag.png",
        name: "Poliwag",
        type: "Water",
        species: "Tadpole Pokémon",
        height: "0.6",
        weight: 12.4,
        evolution: [true, false, false]
    },
    {
        id: 61,
        image: "https://img.pokemondb.net/sprites/black-white/normal/poliwhirl.png",
        name: "Poliwhirl",
        type: "Water",
        species: "Tadpole Pokémon",
        height: "1.0",
        weight: 20.0,
        evolution: [false, true, false]
    },
    {
        id: 62,
        image: "https://img.pokemondb.net/sprites/black-white/normal/poliwrath.png",
        name: "Poliwrath",
        type: "Water Fighting",
        species: "Tadpole Pokémon",
        height: "1.3",
        weight: 54.0,
        evolution: [false, false, true]
    },
    {
        id: 63,
        image: "https://img.pokemondb.net/sprites/black-white/normal/abra.png",
        name: "Abra",
        type: "Psychic",
        species: "Psi Pokémon",
        height: "0.9",
        weight: 19.5,
        evolution: [true, false, false]
    },
    {
        id: 64,
        image: "https://img.pokemondb.net/sprites/black-white/normal/kadabra.png",
        name: "Kadabra",
        type: "Psychic",
        species: "Psi Pokémon",
        height: "1.3",
        weight: 56.5,
        evolution: [false, true, false]
    },
    {
        id: 65,
        image: "https://img.pokemondb.net/sprites/black-white/normal/alakazam.png",
        name: "Alakazam",
        type: "Psychic",
        species: "Psi Pokémon",
        height: "1.5",
        weight: 48.0,
        evolution: [false, false, true]
    },
    {
        id: 66,
        image: "https://img.pokemondb.net/sprites/black-white/normal/machop.png",
        name: "Machop",
        type: "Fighting",
        species: "Superpower Pokémon",
        height: "0.8",
        weight: 19.5,
        evolution: [true, false, false]
    },
    {
        id: 67,
        image: "https://img.pokemondb.net/sprites/black-white/normal/machoke.png",
        name: "Machoke",
        type: "Fighting",
        species: "Superpower Pokémon",
        height: "1.5",
        weight: 70.5,
        evolution: [false, true, false]
    },
    {
        id: 68,
        image: "https://img.pokemondb.net/sprites/black-white/normal/machamp.png",
        name: "Machamp",
        type: "Fighting",
        species: "Superpower Pokémon",
        height: "1.6",
        weight: 130.0,
        evolution: [false, false, true]
    },
    {
        id: 69,
        image: "https://img.pokemondb.net/sprites/black-white/normal/bellsprout.png",
        name: "Bellsprout",
        type: "Grass Poison",
        species: "Flower Pokémon",
        height: "0.7",
        weight: 4.0,
        evolution: [true, false, false]
    },
    {
        id: 70,
        image: "https://img.pokemondb.net/sprites/black-white/normal/weepinbell.png",
        name: "Weepinbell",
        type: "Grass Poison",
        species: "Flycatcher Pokémon",
        height: "1.0",
        weight: 6.4,
        evolution: [false, true, false]
    },
    {
        id: 71,
        image: "https://img.pokemondb.net/sprites/black-white/normal/victreebel.png",
        name: "Victreebel",
        type: "Grass Poison",
        species: "Flycatcher Pokémon",
        height: "1.7",
        weight: 15.5,
        evolution: [false, false, true]
    },
    {
        id: 72,
        image: "https://img.pokemondb.net/sprites/black-white/normal/tentacool.png",
        name: "Tentacool",
        type: "Water Poison",
        species: "Jellyfish Pokémon",
        height: "0.9",
        weight: 45.5,
        evolution: [true, false]
    },
    {
        id: 73,
        image: "https://img.pokemondb.net/sprites/black-white/normal/tentacruel.png",
        name: "Tentacruel",
        type: "Water Poison",
        species: "Jellyfish Pokémon",
        height: "1.6",
        weight: 55.0,
        evolution: [false, true]
    },
    {
        id: 74,
        image: "https://img.pokemondb.net/sprites/black-white/normal/geodude.png",
        name: "Geodude",
        type: "Rock Ground",
        species: "Rock Pokémon",
        height: "0.4",
        weight: 20.0,
        evolution: [true, false, false]
    },
    {
        id: 75,
        image: "https://img.pokemondb.net/sprites/black-white/normal/graveler.png",
        name: "Graveler",
        type: "Rock Ground",
        species: "Rock Pokémon",
        height: "1.0",
        weight: 105.0,
        evolution: [false, true, false]
    },
    {
        id: 76,
        image: "https://img.pokemondb.net/sprites/black-white/normal/golem.png",
        name: "Golem",
        type: "Rock Ground",
        species: "Megaton Pokémon",
        height: "1.4",
        weight: 300.0,
        evolution: [false, false, true]
    },
    {
        id: 77,
        image: "https://img.pokemondb.net/sprites/black-white/normal/ponyta.png",
        name: "Ponyta",
        type: "Fire",
        species: "Fire Horse Pokémon",
        height: "1.0",
        weight: 30.0,
        evolution: [true, false]
    },
    {
        id: 78,
        image: "https://img.pokemondb.net/sprites/black-white/normal/rapidash.png",
        name: "Rapidash",
        type: "Fire",
        species: "Fire Horse Pokémon",
        height: "1.7",
        weight: 95.0,
        evolution: [false, true]
    },
    {
        id: 79,
        image: "https://img.pokemondb.net/sprites/black-white/normal/slowpoke.png",
        name: "Slowpoke",
        type: "Water Psychic",
        species: "Dopey Pokémon",
        height: "1.2",
        weight: 36.0,
        evolution: [true, false]
    },
    {
        id: 80,
        image: "https://img.pokemondb.net/sprites/black-white/normal/slowbro.png",
        name: "Slowbro",
        type: "Water Psychic",
        species: "Hermit Crab Pokémon",
        height: "1.6",
        weight: 78.5,
        evolution: [false, true]
    },
    {
        id: 81,
        image: "https://img.pokemondb.net/sprites/black-white/normal/magnemite.png",
        name: "Magnemite",
        type: "Electric Steel",
        species: "Magnet Pokémon",
        height: "0.3",
        weight: 6.0,
        evolution: [true, false]
    },
    {
        id: 82,
        image: "https://img.pokemondb.net/sprites/black-white/normal/magneton.png",
        name: "Magneton",
        type: "Electric Steel",
        species: "Magnet Pokémon",
        height: "1.0",
        weight: 60.0,
        evolution: [false, true]
    },
    {
        id: 83,
        image: "https://img.pokemondb.net/sprites/black-white/normal/farfetchd.png",
        name: "Farfetch'd",
        type: "Normal Flying",
        species: "Wild Duck Pokémon",
        height: "0.8",
        weight: 15.0,
        evolution: [true]
    },
    {
        id: 84,
        image: "https://img.pokemondb.net/sprites/black-white/normal/doduo.png",
        name: "Doduo",
        type: "Normal Flying",
        species: "Twin Bird Pokémon",
        height: "1.4",
        weight: 39.2,
        evolution: [true, false]
    },
    {
        id: 85,
        image: "https://img.pokemondb.net/sprites/black-white/normal/dodrio.png",
        name: "Dodrio",
        type: "Normal Flying",
        species: "Triple Bird Pokémon",
        height: "1.8",
        weight: 85.2,
        evolution: [false, true]
    },
    {
        id: 86,
        image: "https://img.pokemondb.net/sprites/black-white/normal/seel.png",
        name: "Seel",
        type: "Water",
        species: "Sea Lion Pokémon",
        height: "1.1",
        weight: 90.0,
        evolution: [true, false]
    },
    {
        id: 87,
        image: "https://img.pokemondb.net/sprites/black-white/normal/dewgong.png",
        name: "Dewgong",
        type: "Water Ice",
        species: "Sea Lion Pokémon",
        height: "1.7",
        weight: 120.0,
        evolution: [false, true]
    },
    {
        id: 88,
        image: "https://img.pokemondb.net/sprites/black-white/normal/grimer.png",
        name: "Grimer",
        type: "Poison",
        species: "Sludge Pokémon",
        height: "0.9",
        weight: 30.0,
        evolution: [true, false]
    },
    {
        id: 89,
        image: "https://img.pokemondb.net/sprites/black-white/normal/muk.png",
        name: "Muk",
        type: "Poison",
        species: "Sludge Pokémon",
        height: "1.2",
        weight: 30.0,
        evolution: [false, true]
    },
    {
        id: 90,
        image: "https://img.pokemondb.net/sprites/black-white/normal/shellder.png",
        name: "Shellder",
        type: "Water",
        species: "Bivalve Pokémon",
        height: "0.3",
        weight: 4.0,
        evolution: [true, false]
    },
    {
        id: 91,
        image: "https://img.pokemondb.net/sprites/black-white/normal/cloyster.png",
        name: "Cloyster",
        type: "Water Ice",
        species: "Bivalve Pokémon",
        height: "1.5",
        weight: 132.5,
        evolution: [false, true]
    },
    {
        id: 92,
        image: "https://img.pokemondb.net/sprites/black-white/normal/gastly.png",
        name: "Gastly",
        type: "Ghost Poison",
        species: "Gas Pokémon",
        height: "1.3",
        weight: 0.1,
        evolution: [true, false, false]
    },
    {
        id: 93,
        image: "https://img.pokemondb.net/sprites/black-white/normal/haunter.png",
        name: "Haunter",
        type: "Ghost Poison",
        species: "Gas Pokémon",
        height: "1.6",
        weight: 0.1,
        evolution: [false, true, false]
    },
    {
        id: 94,
        image: "https://img.pokemondb.net/sprites/black-white/normal/gengar.png",
        name: "Gengar",
        type: "Ghost Poison",
        species: "Shadow Pokémon",
        height: "1.5",
        weight: 40.5,
        evolution: [false, false, true]
    },
    {
        id: 95,
        image: "https://img.pokemondb.net/sprites/black-white/normal/onix.png",
        name: "Onix",
        type: "Rock Ground",
        species: "Snake Pokémon",
        height: "8.8",
        weight: 210.0,
        evolution: [true]
    },
    {
        id: 96,
        image: "https://img.pokemondb.net/sprites/black-white/normal/drowzee.png",
        name: "Drowzee",
        type: "Psychic",
        species: "Hypnosis Pokémon",
        height: "1.0",
        weight: 32.4,
        evolution: [true, false]
    },
    {
        id: 97,
        image: "https://img.pokemondb.net/sprites/black-white/normal/hypno.png",
        name: "Hypno",
        type: "Psychic",
        species: "Hypnosis Pokémon",
        height: "1.6",
        weight: 75.6,
        evolution: [false, true]
    },
    {
        id: 98,
        image: "https://img.pokemondb.net/sprites/black-white/normal/krabby.png",
        name: "Krabby",
        type: "Water",
        species: "River Crab Pokémon",
        height: "0.4",
        weight: 6.5,
        evolution: [true, false]
    },
    {
        id: 99,
        image: "https://img.pokemondb.net/sprites/black-white/normal/kingler.png",
        name: "Kingler",
        type: "Water",
        species: "Pincer Pokémon",
        height: "1.3",
        weight: 60.0,
        evolution: [false, true]
    },
    {
        id: 100,
        image: "https://img.pokemondb.net/sprites/black-white/normal/voltorb.png",
        name: "Voltorb",
        type: "Electric",
        species: "Ball Pokémon",
        height: "0.5",
        weight: 10.4,
        evolution: [true, false]
    },
    {
        id: 101,
        image: "https://img.pokemondb.net/sprites/black-white/normal/electrode.png",
        name: "Electrode",
        type: "Electric",
        species: "Ball Pokémon",
        height: "1.2",
        weight: 66.6,
        evolution: [false, true]
    },
    {
        id: 102,
        image: "https://img.pokemondb.net/sprites/black-white/normal/exeggcute.png",
        name: "Exeggcute",
        type: "Grass Psychic",
        species: "Egg Pokémon",
        height: "0.4",
        weight: 2.5,
        evolution: [true, false]
    },
    {
        id: 103,
        image: "https://img.pokemondb.net/sprites/black-white/normal/exeggutor.png",
        name: "Exeggutor",
        type: "Grass Psychic",
        species: "Coconut Pokémon",
        height: "2.0",
        weight: 120.0,
        evolution: [false, true]
    },
    {
        id: 104,
        image: "https://img.pokemondb.net/sprites/black-white/normal/cubone.png",
        name: "Cubone",
        type: "Ground",
        species: "Lonely Pokémon",
        height: "0.4",
        weight: 6.5,
        evolution: [true, false]
    },
    {
        id: 105,
        image: "https://img.pokemondb.net/sprites/black-white/normal/marowak.png",
        name: "Marowak",
        type: "Ground",
        species: "Bone Keeper Pokémon",
        height: "1.0",
        weight: 45.0,
        evolution: [false, true]
    },
    {
        id: 106,
        image: "https://img.pokemondb.net/sprites/black-white/normal/hitmonlee.png",
        name: "Hitmonlee",
        type: "Fighting",
        species: "Kicking Pokémon",
        height: "1.5",
        weight: 49.8,
        evolution: [true]
    },
    {
        id: 107,
        image: "https://img.pokemondb.net/sprites/black-white/normal/hitmonchan.png",
        name: "Hitmonchan",
        type: "Fighting",
        species: "Punching Pokémon",
        height: "1.4",
        weight: 50.2,
        evolution: [true]
    },
    {
        id: 108,
        image: "https://img.pokemondb.net/sprites/black-white/normal/lickitung.png",
        name: "Lickitung",
        type: "Normal",
        species: "Licking Pokémon",
        height: "1.2",
        weight: 65.5,
        evolution: [true]
    },
    {
        id: 109,
        image: "https://img.pokemondb.net/sprites/black-white/normal/koffing.png",
        name: "Koffing",
        type: "Poison",
        species: "Poison Gas Pokémon",
        height: "0.6",
        weight: 1.0,
        evolution: [true, false]
    },
    {
        id: 110,
        image: "https://img.pokemondb.net/sprites/black-white/normal/weezing.png",
        name: "Weezing",
        type: "Poison",
        species: "Poison Gas Pokémon",
        height: "1.2",
        weight: 9.5,
        evolution: [false, true]
    },
    {
        id: 111,
        image: "https://img.pokemondb.net/sprites/black-white/normal/rhyhorn.png",
        name: "Rhyhorn",
        type: "Ground Rock",
        species: "Spikes Pokémon",
        height: "1.0",
        weight: 115.0,
        evolution: [true, false]
    },
    {
        id: 112,
        image: "https://img.pokemondb.net/sprites/black-white/normal/rhydon.png",
        name: "Rhydon",
        type: "Ground Rock",
        species: "Drill Pokémon",
        height: "1.9",
        weight: 120.0,
        evolution: [false, true]
    },
    {
        id: 113,
        image: "https://img.pokemondb.net/sprites/black-white/normal/chansey.png",
        name: "Chansey",
        type: "Normal",
        species: "Egg Pokémon",
        height: "1.1",
        weight: 34.6,
        evolution: [true]
    },
    {
        id: 114,
        image: "https://img.pokemondb.net/sprites/black-white/normal/tangela.png",
        name: "Tangela",
        type: "Grass",
        species: "Vine Pokémon",
        height: "1.0",
        weight: 35.0,
        evolution: [true]
    },
    {
        id: 115,
        image: "https://img.pokemondb.net/sprites/black-white/normal/kangaskhan.png",
        name: "Kangaskhan",
        type: "Normal",
        species: "Parent Pokémon",
        height: "2.2",
        weight: 80.0,
        evolution: [true]
    },
    {
        id: 116,
        image: "https://img.pokemondb.net/sprites/black-white/normal/horsea.png",
        name: "Horsea",
        type: "Water",
        species: "Dragon Pokémon",
        height: "0.4",
        weight: 8.0,
        evolution: [true, false]
    },
    {
        id: 117,
        image: "https://img.pokemondb.net/sprites/black-white/normal/seadra.png",
        name: "Seadra",
        type: "Water",
        species: "Dragon Pokémon",
        height: "1.2",
        weight: 25.0,
        evolution: [false, true]
    },
    {
        id: 118,
        image: "https://img.pokemondb.net/sprites/black-white/normal/goldeen.png",
        name: "Goldeen",
        type: "Water",
        species: "Goldfish Pokémon",
        height: "0.6",
        weight: 15.0,
        evolution: [true, false]
    },
    {
        id: 119,
        image: "https://img.pokemondb.net/sprites/black-white/normal/seaking.png",
        name: "Seaking",
        type: "Water",
        species: "Goldfish Pokémon",
        height: "1.3",
        weight: 39.0,
        evolution: [false, true]
    },
    {
        id: 120,
        image: "https://img.pokemondb.net/sprites/black-white/normal/staryu.png",
        name: "Staryu",
        type: "Water",
        species: "Star Shape Pokémon",
        height: "0.8",
        weight: 34.5,
        evolution: [true, false]
    },
    {
        id: 121,
        image: "https://img.pokemondb.net/sprites/black-white/normal/starmie.png",
        name: "Starmie",
        type: "Water Psychic",
        species: "Mysterious Pokémon",
        height: "1.1",
        weight: 80.0,
        evolution: [false, true]
    },
    {
        id: 122,
        image: "https://img.pokemondb.net/sprites/black-white/normal/mr-mime.png",
        name: "Mr. Mime",
        type: "Psychic",
        species: "Barrier Pokémon",
        height: "1.3",
        weight: 54.5,
        evolution: [true]
    },
    {
        id: 123,
        image: "https://img.pokemondb.net/sprites/black-white/normal/scyther.png",
        name: "Scyther",
        type: "Bug Flying",
        species: "Mantis Pokémon",
        height: "1.5",
        weight: 56.0,
        evolution: [true]
    },
    {
        id: 124,
        image: "https://img.pokemondb.net/sprites/black-white/normal/jynx.png",
        name: "Jynx",
        type: "Ice Psychic",
        species: "Human Shape Pokémon",
        height: "1.4",
        weight: 40.6,
        evolution: [true]
    },
    {
        id: 125,
        image: "https://img.pokemondb.net/sprites/black-white/normal/electabuzz.png",
        name: "Electabuzz",
        type: "Electric",
        species: "Electric Pokémon",
        height: "1.1",
        weight: 30.0,
        evolution: [true]
    },
    {
        id: 126,
        image: "https://img.pokemondb.net/sprites/black-white/normal/magmar.png",
        name: "Magmar",
        type: "Fire",
        species: "Spitfire Pokémon",
        height: "1.3",
        weight: 44.5,
        evolution: [true]
    },
    {
        id: 127,
        image: "https://img.pokemondb.net/sprites/black-white/normal/pinsir.png",
        name: "Pinsir",
        type: "Bug",
        species: "Stag Beetle Pokémon",
        height: "1.5",
        weight: 55.0,
        evolution: [true]
    },
    {
        id: 128,
        image: "https://img.pokemondb.net/sprites/black-white/normal/tauros.png",
        name: "Tauros",
        type: "Normal",
        species: "Wild Bull Pokémon",
        height: "1.4",
        weight: 88.4,
        evolution: [true]
    },
    {
        id: 129,
        image: "https://img.pokemondb.net/sprites/black-white/normal/magikarp.png",
        name: "Magikarp",
        type: "Water",
        species: "Fish Pokémon",
        height: "0.9",
        weight: 10.0,
        evolution: [true, false]
    },
    {
        id: 130,
        image: "https://img.pokemondb.net/sprites/black-white/normal/gyarados.png",
        name: "Gyarados",
        type: "Water Flying",
        species: "Atrocious Pokémon",
        height: "6.5",
        weight: 235.0,
        evolution: [false, true]
    },
    {
        id: 131,
        image: "https://img.pokemondb.net/sprites/black-white/normal/lapras.png",
        name: "Lapras",
        type: "Water Ice",
        species: "Transport Pokémon",
        height: "2.5",
        weight: 220.0,
        evolution: [true]
    },
    {
        id: 132,
        image: "https://img.pokemondb.net/sprites/black-white/normal/ditto.png",
        name: "Ditto",
        type: "Normal",
        species: "Transform Pokémon",
        height: "0.3",
        weight: 4.0,
        evolution: [true]
    },
    {
        id: 133,
        image: "https://img.pokemondb.net/sprites/black-white/normal/eevee.png",
        name: "Eevee",
        type: "Normal",
        species: "Evolution Pokémon",
        height: "0.3",
        weight: 6.5,
        evolution: 4
    },
    {
        id: 134,
        image: "https://img.pokemondb.net/sprites/black-white/normal/vaporeon.png",
        name: "Vaporeon",
        type: "Water",
        species: "Bubble Jet Pokémon",
        height: "1.0",
        weight: 29.0,
        evolution: [false, true]
    },
    {
        id: 135,
        image: "https://img.pokemondb.net/sprites/black-white/normal/jolteon.png",
        name: "Jolteon",
        type: "Electric",
        species: "Lightning Pokémon",
        height: "0.8",
        weight: 24.5,
        evolution: [false, true]
    },
    {
        id: 136,
        image: "https://img.pokemondb.net/sprites/black-white/normal/flareon.png",
        name: "Flareon",
        type: "Fire",
        species: "Flame Pokémon",
        height: "0.9",
        weight: 25.0,
        evolution: [false, true]
    },
    {
        id: 137,
        image: "https://img.pokemondb.net/sprites/black-white/normal/porygon.png",
        name: "Porygon",
        type: "Normal",
        species: "Virtual Pokémon",
        height: "0.8",
        weight: 36.5,
        evolution: [true]
    },
    {
        id: 138,
        image: "https://img.pokemondb.net/sprites/black-white/normal/omanyte.png",
        name: "Omanyte",
        type: "Rock Water",
        species: "Spiral Pokémon",
        height: "0.4",
        weight: 7.5,
        evolution: [true, false]
    },
    {
        id: 139,
        image: "https://img.pokemondb.net/sprites/black-white/normal/omastar.png",
        name: "Omastar",
        type: "Rock Water",
        species: "Spiral Pokémon",
        height: "1.0",
        weight: 35.0,
        evolution: [false, true]
    },
    {
        id: 140,
        image: "https://img.pokemondb.net/sprites/black-white/normal/kabuto.png",
        name: "Kabuto",
        type: "Rock Water",
        species: "Shellfish Pokémon",
        height: "0.5",
        weight: 11.5,
        evolution: [true, false]
    },
    {
        id: 141,
        image: "https://img.pokemondb.net/sprites/black-white/normal/kabutops.png",
        name: "Kabutops",
        type: "Rock Water",
        species: "Shellfish Pokémon",
        height: "1.3",
        weight: 40.5,
        evolution: [false, true]
    },
    {
        id: 142,
        image: "https://img.pokemondb.net/sprites/black-white/normal/aerodactyl.png",
        name: "Aerodactyl",
        type: "Rock Flying",
        species: "Fossil Pokémon",
        height: "1.8",
        weight: 59.0,
        evolution: [true]
    },
    {
        id: 143,
        image: "https://img.pokemondb.net/sprites/black-white/normal/snorlax.png",
        name: "Snorlax",
        type: "Normal",
        species: "Sleeping Pokémon",
        height: "2.1",
        weight: 460.0,
        evolution: [true]
    },
    {
        id: 144,
        image: "https://img.pokemondb.net/sprites/black-white/normal/articuno.png",
        name: "Articuno",
        type: "Ice Flying",
        species: "Freeze Pokémon",
        height: "1.7",
        weight: 55.4,
        evolution: [true]
    },
    {
        id: 145,
        image: "https://img.pokemondb.net/sprites/black-white/normal/zapdos.png",
        name: "Zapdos",
        type: "Electric Flying",
        species: "Electric Pokémon",
        height: "1.6",
        weight: 52.6,
        evolution: [true]
    },
    {
        id: 146,
        image: "https://img.pokemondb.net/sprites/black-white/normal/moltres.png",
        name: "Moltres",
        type: "Fire Flying",
        species: "Flame Pokémon",
        height: "2.0",
        weight: 60.0,
        evolution: [true]
    },
    {
        id: 147,
        image: "https://img.pokemondb.net/sprites/black-white/normal/dratini.png",
        name: "Dratini",
        type: "Dragon",
        species: "Dragon Pokémon",
        height: "1.8",
        weight: 3.3,
        evolution: [true, false, false]
    },
    {
        id: 148,
        image: "https://img.pokemondb.net/sprites/black-white/normal/dragonair.png",
        name: "Dragonair",
        type: "Dragon",
        species: "Dragon Pokémon",
        height: "4.0",
        weight: 16.5,
        evolution: [false, true, false]
    },
    {
        id: 149,
        image: "https://img.pokemondb.net/sprites/black-white/normal/dragonite.png",
        name: "Dragonite",
        type: "Dragon Flying",
        species: "Dragon Pokémon",
        height: "2.2",
        weight: 210.0,
        evolution: [false, false, true]
    },
    {
        id: 150,
        image: "https://img.pokemondb.net/sprites/black-white/normal/mewtwo.png",
        name: "Mewtwo",
        type: "Psychic",
        species: "Genetic Pokémon",
        height: "2.0",
        weight: 122.0,
        evolution: [true]
    },
    {
        id: 151,
        image: "https://img.pokemondb.net/sprites/black-white/normal/mew.png",
        name: "Mew",
        type: "Psychic",
        species: "New Species Pokémon",
        height: "0.4",
        weight: 4.0,
        evolution: [true]
    } 
];

export async function GET(){
    return NextResponse.json(listaDePokemons)
}