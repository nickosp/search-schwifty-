import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Results = ({ characterResult, filteredResults }) => {
	const resultsToDisplay =
		filteredResults.length === 0 ? characterResult : filteredResults;
	return (
		<div>
			<h1>Results</h1>
			{resultsToDisplay.map((character) => (
				<h2 key={character.id}>{character.name}</h2>
			))}
		</div>
	);
};
export default Results;
