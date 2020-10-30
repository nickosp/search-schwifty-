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
			.catch((error) => error);
	}, [url]);
	console.log(characterInfo);
	if (!characterInfo.name) {
		return null;
	}
	return (
		<div>
			<h2>{characterInfo.name}</h2>
			<img src={characterInfo.image} />
			<h2>Origin: {characterInfo.origin.name}</h2>
			<h2>Species: {characterInfo.species}</h2>
			<h2>Dead or Alive: {characterInfo.status}</h2>
			<h2>Location: {characterInfo.location.name}</h2>
		</div>
	);
};

export default CharacterInfo;
