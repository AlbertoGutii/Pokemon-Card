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
            {pokemon && <article className="w-96 h-96 flex flex-col justify-between bg-white ">
                <div className="relative w-full flex items-center justify-center">
                    <img className="absolute w-full" src="../src/assets/bg-pattern-card.svg" alt="tarjeta-color" />
                    <img className="relative my-7 z-10" src={pokemon?.sprites.other.showdown['front_default']} alt="gifPokemon" />
                    <h1 className="relative">
                        {pokemon?.name}  
                        <span className="font-gray"> {pokemon?.stats[0].base_stat}{pokemon?.stats[0].stat.name}</span>
                    </h1>
                    <p className="">{pokemon?.base_experience} exp</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center flex-col gap-1 mx-3">
                        <h3>{pokemon?.stats[1].base_stat}</h3>
                        <p>Ataque</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-1 mx-3">
                        <h3>{pokemon?.stats[3].base_stat}</h3>
                        <p>Ataque especial</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-1 mx-3">
                        <h3>{pokemon?.stats[2].base_stat}</h3>
                        <p>Defensa</p>
                    </div>
                </div>
                <button onClick={handleClick}>
                    Nuevo Pokemon
                </button>

            </article>}
        </>
    )
}