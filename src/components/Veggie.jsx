import { useState, useEffect } from 'react';
import * as API from '../services/recipes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Wrapper, Card, Gradient } from '../styledComponents';
import { Link } from 'react-router-dom';
export default function Veggie() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const check = localStorage.getItem('vegetarianRecipes');
		if (check) {
			setRecipes(JSON.parse(check));
		} else {
			API.getVegetarian().then(data => {
				setRecipes(data);
				localStorage.setItem('vegetarianRecipes', JSON.stringify(data));
			});
		}
	}, []);

	return (
		<Wrapper>
			<h3>Vegetarian picks</h3>
			<Splide
				options={{
					// perPage: window.innerWidth < 770 ? 2 : 4,
					perPage: 4,
					arrows: false,
					pagination: false,
					drag: 'free',
					gap: '5rem',
					speed: 2000,
				}}
			>
				{recipes.map(recipe => {
					return (
						<SplideSlide key={recipe.id}>
							<Link to={`/recipe/${recipe.id}`}>
								<Card>
									<p>{recipe.title}</p>
									<img
										src={recipe.image ?? 'https://i.imgur.com/BM5i2p3.jpeg'}
									/>
									<Gradient />
								</Card>
							</Link>
						</SplideSlide>
					);
				})}
			</Splide>
		</Wrapper>
	);
}
