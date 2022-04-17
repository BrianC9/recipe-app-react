import { useState, useEffect } from 'react';
import * as API from '../services/recipes';
export default function Popular() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		API.getPopular().then(data => setRecipes(data.recipes));
	}, []);
	return (
		<div>
			{recipes.map(recipe => {
				return <p key={recipe.id}>{recipe.title}</p>;
			})}
		</div>
	);
}
