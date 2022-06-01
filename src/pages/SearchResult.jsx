import { useParams } from 'react-router-dom';
import { getRecipeBySearch } from '../services/recipes.js';
import { useEffect, useState } from 'react';
import { CardGrid, Grid } from '../styledComponents.jsx';
function SearchResult() {
	const [recipesResults, setRecipesResults] = useState([]);
	const searched = useParams();
	useEffect(() => {
		getRecipeBySearch(searched?.search).then(data => {
			setRecipesResults(data.results);
		});
	}, [searched.search]);
	if (recipesResults.length === 0) {
		return (
			<h2 className='titleResultPage'>
				No hay resultados para {searched.search}
			</h2>
		);
	}
	return (
		<>
			<h2 className='titleResultPage'>Recetas para '{searched.search}'</h2>
			<Grid>
				{recipesResults.map(item => {
					return (
						<CardGrid key={item.id}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</CardGrid>
					);
				})}
			</Grid>
		</>
	);
}

export default SearchResult;
