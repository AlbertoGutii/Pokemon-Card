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
            {pokemon && <article className="rounded-lg text-xs w-64 h-80 items-center flex flex-col gap-6 bg-white ">
                <div className="relative w-full flex items-center justify-around z-10">
                    <img className="absolute rounded-t-lg w-full h-24 top-0" src="../src/assets/bg-pattern-card.svg" alt="tarjeta-color" />
                    <div className="relative mt-6">
                        <div className="w-24 h-24 rounded-full bg-white mb-2 flex items-center justify-center overflow-hidden">
                            <img src={pokemon?.sprites.other.showdown['front_default']} alt="gifPokemon" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1>
                                {pokemon?.name}  
                                <span className="text-darkGray"> {pokemon?.stats[0].base_stat}{pokemon?.stats[0].stat.name}</span>
                            </h1>
                            <p className="text-darkGray">{pokemon?.base_experience} exp</p>
                        </div>
                    </div>
                </div>
                <div className="relative border-t border-darkGray pt-5 flex items-center justify-center">
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
                <button className="text-white" onClick={handleClick}>
                    Nuevo Pokemon
                </button>

            </article>}
        </>
    )
}