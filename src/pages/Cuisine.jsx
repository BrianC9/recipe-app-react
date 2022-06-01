/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getCuisine } from '../services/recipes.js';
import styled from 'styled-components';
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

	return <h1>Cuisine</h1>;
}
