import React, { useState, useEffect } from 'react';
 const CharacterInfo = ({ match }) => {
     const [characterInfo, setCharacterInfo] = useState({});
     useEffect(() => {}, []);
     const url = `https://rickandmortyapi.com/api/character/${match.params.character}`;
     useEffect(() => {
         console.log(match);
         fetch(url)
         .then((res) => res.json())
         .then((resJson) => {
             setCharacterInfo(resJson);
             console.log(resJson);
         })
         .catch(error => error)
         
        }, [url]);
        console.log(characterInfo);
        if (!characterInfo.name) {
            return null;
        }
    return (
        <div>
            <h2>{characterInfo.name}</h2>
            {/* <img src={url} /> */}
        </div>
    );
};

export default CharacterInfo;