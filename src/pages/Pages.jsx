import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResult from './SearchResult';
import RecipeDetails from './RecipeDetails';
import { AnimatePresence } from 'framer-motion';
export default function Pages() {
	const location = useLocation();
	return (
		<AnimatePresence existBeforeEnter>
			<Routes key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/cuisine/:typeCuisine' element={<Cuisine />} />
				<Route path='/searchresult/:search' element={<SearchResult />} />
				<Route path='/recipe/:name' element={<RecipeDetails />} />
			</Routes>
		</AnimatePresence>
	);
}
