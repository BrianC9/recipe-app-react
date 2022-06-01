import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
		height: 50%;
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
const IconList = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin: 2rem 4rem;
`;
const MenuCategoryNavLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	background: linear-gradient(35deg, gray, black);
	min-width: 8rem;
	min-height: 8rem;
	cursor: pointer;
	transform: scale(0.8);
	border-radius: 50%;
	h4 {
		color: white;
		font-size: 0.8rem;
	}
	svg {
		color: white;
		font-size: 2rem;
	}
	&.active {
		background: linear-gradient(to bottom, #f27121, #e94057);
	}
`;
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;
const CardCuisine = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
		cursor: pointer;
	}
`;
const FormSearch = styled.form`
	position: relative;
	margin: 2rem 0rem;
	width: 100%;
	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
		border: none;
		border-radius: 2rem;
		outline: none;
		width: 100%;
		padding: 1rem 3rem;
	}
	svg {
		position: absolute;
		top: 50%;
		color: white;
		transform: translate(100%, -50%);
	}
`;
export {
	Wrapper,
	Card,
	Gradient,
	IconList,
	MenuCategoryNavLink,
	Grid,
	CardCuisine,
	FormSearch,
};
