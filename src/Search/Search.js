import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Results from '../Results/Results';
///make a search bar///
const Search = () => {
	const initialState = {
		searchBar: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div>
			Search
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchCharacters'>
					<input
						id='searchCharacter'
						onChange={handleChange}
						value={formState.searchCharacter}
					/>
					<button type='submit'>Submit</button>
				</label>
			</form>
			<Results />
		</div>
	);
};
export default Search;
