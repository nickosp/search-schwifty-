import React from 'react';
import { Link } from 'react-router-dom';

/////worked with ash and riggs on the nav//////
const Nav = () => {
	return (
		<div>
			<Link to='/home'>Home</Link>
			<br></br>
			<Link to='/search'>Search</Link>
			<main></main>
		</div>
	);
};
export default Nav;
