/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getCuisine } from '../services/recipes.js';
import styled from 'styled-components';
import { Gradient, Grid, CardGrid } from '../styledComponents.jsx';
export default function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	const params = useParams();

	useEffect(() => {
		const check = localStorage.getItem(`${params.typeCuisine}`);
		if (check && check !== 'undefined') {
			setCuisine(JSON.parse(check));
		} else {
			getCuisine(params.typeCuisine).then(data => {
				console.log(data.results);
				setCuisine(data.results);
				localStorage.setItem(
					`${params.typeCuisine}`,
					JSON.stringify(data.results)
				);
			});
		}
	}, [params.typeCuisine]);

	return (
		<Grid
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{cuisine.map(item => {
				return (
					<CardGrid key={item.id}>
						<Link to={`/recipe/${item.id}`}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</Link>
					</CardGrid>
				);
			})}
		</Grid>
	);
}
