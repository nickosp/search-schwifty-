import React, { useEffect, useState } from 'react';
const Results = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
      console.log(resJson);
      setCharacters(resJson.results)
      
    }, [])
    .catch(console.error)
}, []);
return (
    <div>Results
        {characters.map((character) => (
         <h1 key={character.id}> {character.name}</h1>   
        ))}
    </div>
    )
};
export default Results;
