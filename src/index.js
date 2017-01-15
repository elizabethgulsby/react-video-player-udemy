import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBNPIHaIiyBplXV3v9-fvTyWS9TLFODiuI';


//Create a new component.  This component should produce some HTML.

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render (
	<App />,
	document.querySelector('.container')
);

