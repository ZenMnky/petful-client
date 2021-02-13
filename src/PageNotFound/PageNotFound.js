import React from 'react';
import { Link } from 'react-router-dom';


export default function PageNotFound() {
	return (
		<article>
			<h1>This page has not yet been <Link to='/adopt'>adopted</Link></h1>
			<img src='https://i.ibb.co/yPPf2xq/Sad-Cat-Thumb.jpg' alt='sad cat wants love' />
		</article>
	);
}
