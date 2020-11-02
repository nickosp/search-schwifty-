import React from 'react';
import { Link } from 'react-router-dom';
const Results = ({ characterResult, filteredResults }) => {
    console.log(characterResult, filteredResults);
	const resultsDisplay =
		filteredResults.length === 0 ? characterResult : filteredResults;
	return (
		<div>
			<h4>Results</h4>
			{resultsDisplay.map((character) => {
                console.log(character);
			return	(
            <Link to={`/info/${character.id}`} key={character.id}>
                <h5 key={character.id}>{character.name}</h5>
                </Link>
            );
            })}
		</div>
	);
};
export default Results;
