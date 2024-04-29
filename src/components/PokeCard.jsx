import { useState,useEffect } from "react";
import { generarNumeroAleatorio } from "../services/num_aleatorio";

export function PokeCard() {

    const [pokemon, setPokemon] = useState(null)
    const [num, setNum] = useState(Math.floor(Math.random() * 151) +1)
    console.log(num)

    useEffect(() => {
        // recuperamos la api
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                setPokemon(response)
            })
    }, [num])

    const handleClick = () => {
        generarNumeroAleatorio().then(newNum => setNum(newNum))
    }

    console.log(pokemon?.base_experience)
    console.log(pokemon?.stats[0].base_stat)

    return (
        //! tenemos que verificar que pokemon existe porque si no da error
        //! NO PUEDE SER EN EL DIV PRINCIPAL
        <>
            {pokemon && <article>
                {/* aqui iria la imagen con el fondo */}
                <div className="infoPokemon">
                    <img src={pokemon?.sprites.other.showdown['front_default']} alt="gifPokemon" />
                    <h1 className="namePokemon">
                        {pokemon?.name}  
                        <span> {pokemon?.stats[0].base_stat}{pokemon?.stats[0].stat.name}</span>
                    </h1>
                    <p className="expPokemon">{pokemon?.base_experience} exp</p>
                </div>
                <div className="statsPokemon">
                    <div className="statsPokemon">
                        <h3>{pokemon?.stats[1].base_stat}</h3>
                        <p>{pokemon?.stats[1].stat.name}</p>
                    </div>
                    <div className="statsPokemon">
                        <h3>{pokemon?.stats[2].base_stat}</h3>
                        <p>{pokemon?.stats[2].stat.name}</p>
                    </div>
                    <div className="statsPokemon">
                        <h3>{pokemon?.stats[3].base_stat}</h3>
                        <p>{pokemon?.stats[3].stat.name}</p>
                    </div>
                    <div className="statsPokemon">
                        <h3>{pokemon?.stats[4].base_stat}</h3>
                        <p>{pokemon?.stats[4].stat.name}</p>
                    </div>
                    <div className="statsPokemon">
                        <h3>{pokemon?.stats[5].base_stat}</h3>
                        <p>{pokemon?.stats[5].stat.name}</p>
                    </div>
                </div>
                <button onClick={handleClick}>
                    Nuevo Pokemon
                </button>

            </article>}
        </>
    )
}