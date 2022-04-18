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
	margin: 2rem 0rem;
`;
export { Wrapper, Card, Gradient, IconList };