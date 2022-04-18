import Pages from './pages/Pages';
import './index.css';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
export default function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Link to={'/'}>
					<h1>Recipes App</h1>
				</Link>
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}
