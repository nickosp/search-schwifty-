import React from 'react';
import { Link } from 'react-router-dom';

/////worked with ash and riggs on the nav//////
const Nav = () => {
	return (
		<div>
			<Link className='link' to='/home' style={{ textDecoration: 'none' }}>Earth</Link>
				
			<Link className='link' to='/search' style={{ textDecoration: 'none' }}>Explore</Link>
			
		</div>
	);
};
export default Nav;
	
