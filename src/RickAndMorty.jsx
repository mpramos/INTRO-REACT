import React, { useEffect, useState } from 'react'

export const RickAndMorty = () => {

    const [characters,setCharacters]=useState([])
useEffect(()=>{
    const fetchCaracters = async ()=>{
        try {
            const respuesta = await fetch('https://rickandmortyapi.com/api/character')
               const data = await respuesta.json()
               
               setCharacters(data.results)
               console.log(characters);
                 
        } 
        catch (error) {
            console.log('Error al cargar Los personajes', error);
            
        }
    }
    fetchCaracters()
},[])
  return (
    <div>
        <h1>Personajes de Rick and Morty</h1>
           <div>
            {characters.map(character=>(
                <div>
                    <img src={character.image} alt="" />
                <p>{character.name}</p>
                </div>

            ))}
            </div> 
    </div>
)
}
