import React, { useState, useEffect } from 'react';
import Results from '../Results/Results';
import '../App.css';
const Search = () => {
	const [filteredResults, setFilteredResults] = useState([]);
	const [characterResult, setCharacterResult] = useState([]);

	function getCharacterIds(numberOfCharacters) {
		let characterIDs = [];
		for (let i = 1; i < numberOfCharacters; i++) {
			characterIDs.push(i);
		}
		return characterIDs;
	}

	const url = 'https://rickandmortyapi.com/api/character/';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				let count = resJson.info.count;
				count = getCharacterIds(count);
				return fetch(url + count);
			})
			.then((res) => res.json())
			.then((resJson) => {
			setCharacterResult(resJson)
			})

			.catch(console.error);
	}, []);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target[0].value);
	};
	/////// Worked with Riggs on the search filter/////
	const handleChange = (event) => {
		const filterResults = characterResult.filter((result) => {
			return result.name.includes(event.target.value.toUpperCase());
		});
		setFilteredResults(filterResults);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>
					<input id='searchBar' onChange={handleChange} />
					<button type='submit'>Search Characters </button>
				</label>
			</form>
			<Results
				characterResult={characterResult}
				filteredResults={filteredResults}
			/>
		</div>
	);
};
export default Search;
