import { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as API from '../services/recipes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Popular() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		API.getPopular().then(data => setRecipes(data.recipes));
	}, []);
	console.log(recipes);
	return (
		<Wrapper>
			<h3>Popular picks</h3>
			<Splide
				options={{
					// perPage: window.innerWidth < 770 ? 2 : 4,
					perPage: 1,
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
								<img src={recipe.image} />
								<Gradient />
							</Card>
						</SplideSlide>
					);
				})}
			</Splide>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin: 4rem 0rem;
`;
const Card = styled.div`
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1.2rem;
		height: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.8));
`;
