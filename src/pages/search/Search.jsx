import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import SearchForm from '../../component/MoviesSearch/SearchForm';



const Search = () => {
	return (
		<div className='app'>
			<Navbar />
			<SearchForm />
		</div>
	);
};

export default Search;
