import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Banner from '../../component/Banner/Intro';
import MovieList from '../../component/MoviesList/MoviesList';

 



function Browse() {
	
	return (
		<div>
			<Navbar />
			<Banner /> 
			<MovieList />

		</div>
	);
}

export default Browse;

