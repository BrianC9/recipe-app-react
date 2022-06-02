import Pages from './pages/Pages';
import './index.css';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
export default function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<LogoApp to={'/'}>
					<h1>CookBook</h1>
					<GiKnifeFork />
				</LogoApp>
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}
const LogoApp = styled(Link)`
	margin-top: 1rem;
	color: #f17244;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
	}
	svg {
		font-size: 2rem;
	}
`;
