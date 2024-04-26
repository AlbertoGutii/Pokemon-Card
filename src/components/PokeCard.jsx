import { useState,useEffect } from "react";

export function PokeCard() {

    const [pokemon, setPokemon] = useState(null)
    const num_pokemon = Math.floor(Math.random() * 151) +1
    console.log(num_pokemon)

    useEffect(() => {
        // recuperamos la api
        fetch(`https://pokeapi.co/api/v2/pokemon/${num_pokemon}/`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                setPokemon(response)
            })
    }, [])

    console.log(pokemon?.sprites.other.showdown['back_default'])
    console.log(pokemon?.stats[0].base_stat)

    return (
        //! tenemos que verificar que pokemon existe porque si no da error
        //! NO PUEDE SER EN EL DIV PRINCIPAL
        <>
            {pokemon && <div>
                <img src={pokemon?.sprites.other.showdown['back_default']} alt="culito-culito" />
                <img src={pokemon?.sprites.other.showdown['front_default']} alt="culito-culito" />
                <h2>{pokemon?.name}</h2>
                <ul>
                    <li>{pokemon?.stats[0].stat.name}: {pokemon?.stats[0].base_stat}</li>
                    <li>{pokemon?.stats[1].stat.name}: {pokemon?.stats[1].base_stat}</li>
                    <li>{pokemon?.stats[2].stat.name}: {pokemon?.stats[2].base_stat}</li>
                    <li>{pokemon?.stats[3].stat.name}: {pokemon?.stats[3].base_stat}</li>
                    <li>{pokemon?.stats[4].stat.name}: {pokemon?.stats[4].base_stat}</li>
                    <li>{pokemon?.stats[5].stat.name}: {pokemon?.stats[5].base_stat}</li>
                </ul>

                <button>Nuevo Pokemon</button>

            </div>}
        </>
    )
}