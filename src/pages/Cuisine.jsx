/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getCuisine } from '../services/recipes.js';
import styled from 'styled-components';
import { Gradient, Grid, CardCuisine } from '../styledComponents.jsx';
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
		<Grid>
			{cuisine.map(item => {
				return (
					<CardCuisine key={item.id}>
						<img src={item.image} alt={item.title} />
						<h4>{item.title}</h4>
					</CardCuisine>
				);
			})}
		</Grid>
	);
}
