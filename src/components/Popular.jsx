import { useState, useEffect } from 'react';
import * as API from '../services/recipes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Wrapper, Card, Gradient } from '../styledComponents';

export default function Popular() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const check = localStorage.getItem('popularRecipes');
		if (check) {
			setRecipes(JSON.parse(check));
		} else {
			API.getPopular().then(data => {
				setRecipes(data);
				localStorage.setItem('popularRecipes', JSON.stringify(data));
			});
		}
	}, []);
	console.log('estado popular recipes', recipes);
	console.log(
		'localStorage popular',
		JSON.parse(localStorage.getItem('popularRecipes'))
	);
	return (
		<Wrapper>
			<h3>Popular picks</h3>
			<Splide
				options={{
					// perPage: window.innerWidth < 770 ? 2 : 4,
					perPage: 3,
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
							<Card>
								<p>{recipe.title}</p>
								<img src={recipe.image ?? 'https://i.imgur.com/BM5i2p3.jpeg'} />
								<Gradient />
							</Card>
						</SplideSlide>
					);
				})}
			</Splide>
		</Wrapper>
	);
}
