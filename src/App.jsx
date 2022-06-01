import Pages from './pages/Pages';
import './index.css';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
export default function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Link to={'/'}>
					<h1 className='titleApp'>Recipes App</h1>
				</Link>
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}
