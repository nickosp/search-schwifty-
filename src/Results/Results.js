import React from 'react';
import { Link } from 'react-router-dom';
const Results = ({ characterResult, filteredResults }) => {
	const resultsDisplay =
		filteredResults.length === 0 ? characterResult : filteredResults;
	return (
		<div>
			<h1>Results</h1>
			{resultsDisplay.map((character) => {
                console.log(character);
			return	(
            <Link to={`/info/${character.id}`} key={character.id}>
                <h2 key={character.id}>{character.name}</h2>
                </Link>
            );
            })}
		</div>
	);
};
export default Results;
