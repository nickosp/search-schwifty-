import React from 'react';
import { Link } from 'react-router-dom';
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
