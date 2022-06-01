import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResult from './SearchResult';
export default function Pages() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='cuisine/:typeCuisine' element={<Cuisine />} />
			<Route path='/searchresult/:search' element={<SearchResult />} />
		</Routes>
	);
}
