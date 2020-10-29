import React, { useState, useEffect } from 'react';
import Results from '../Results/Results';
const Search = () => {
	const [filteredResults, setFilteredResults] = useState([]);
	const [characterResult, setCharacterResult] = useState([]);
	const url = 'https://rickandmortyapi.com/api/character/';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				console.log(resJson);
				setCharacterResult(resJson.results);
			})
			.catch(console.error);
	}, []);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target[0].value);
	};
	const handleChange = (event) => {
		const filterResults = characterResult.filter((result) => {
			return result.name.includes(event.target.value.toUpperCase());
		});
		setFilteredResults(filterResults);
	};
	return (
		<div>
			Search
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>
					<input id='searchBar' onChange={handleChange} />
					<button type='submit'>Search Characters By Keywords</button>
				</label>
			</form>
			<Results characterResult={characterResult} filteredResults={filteredResults} />
		</div>
	);
};
export default Search;
