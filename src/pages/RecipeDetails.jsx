import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getRecipeDetails } from '../services/recipes';
export default function RecipeDetails() {
	const [recipe, setRecipe] = useState({});
	const recipeParam = useParams();
	useEffect(() => {
		getRecipeDetails(recipeParam.name).then(data => {
			setRecipe(data);
		});
	}, [recipeParam.name]);
	console.log(recipe);
	return (
		<DetailWrapper>
			<h1>Recipe details page {recipe?.title}</h1>
			<p>{recipe.summary}</p>
		</DetailWrapper>
	);
}
const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	h2 {
		margin-bottom: 2rem;
	}
	li {
		font-size: 1.2rem;
	}
`;
