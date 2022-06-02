import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getRecipeDetails } from '../services/recipes';
export default function RecipeDetails() {
	const [recipe, setRecipe] = useState({});
	const [activeTab, setActiveTub] = useState('preparation');
	const recipeParam = useParams();
	useEffect(() => {
		getRecipeDetails(recipeParam.name).then(data => {
			setRecipe(data);
		});
	}, [recipeParam.name]);
	console.log(recipeParam.name);
	console.log(recipe);
	return (
		<DetailWrapper>
			<div>
				<h2>{recipe.title}</h2>
				<img src={recipe.image} alt={recipe.title} />
			</div>

			<Info>
				<ButtonDetails
					className={activeTab === 'preparation' ? 'active' : ''}
					onClick={() => setActiveTub('preparation')}
				>
					Preparation
				</ButtonDetails>
				<ButtonDetails
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTub('ingredients')}
				>
					Ingredients
				</ButtonDetails>
				{activeTab === 'preparation' && (
					<div>
						<h3>Summary</h3>
						<h4 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h4>
						<h3>Preparation</h3>
						<h4
							dangerouslySetInnerHTML={{
								__html:
									recipe.instructions === ''
										? 'There is no instructions defined.'
										: recipe.instructions,
							}}
						></h4>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{recipe.extendedIngredients.map(ingredient => {
							return <li key={ingredient.id}>{ingredient.name}</li>;
						})}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}
const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}
	h3 {
		margin-bottom: 2rem;
		font-size: 1.5rem;
	}
	h2 {
		margin-bottom: 2rem;
		max-width: 600px;
	}
	li {
		text-transform: capitalize;
	}
	ul {
		margin-top: 2rem;
	}
`;
const ButtonDetails = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: white;
	border: 2px solid;
	margin-right: 2rem;

	font-weight: 600;
`;
const Info = styled.div`
	margin-left: 10rem;
`;
