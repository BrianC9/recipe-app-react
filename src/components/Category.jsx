import { GiNoodles, GiBowlOfRice, GiPizzaSlice, GiOlive } from 'react-icons/gi';
import { IconList, MenuCategoryNavLink } from '../styledComponents';
export default function Category() {
	return (
		<IconList>
			<MenuCategoryNavLink to={'/cuisine/Chinese'}>
				<GiBowlOfRice />
				<h4>Chinese</h4>
			</MenuCategoryNavLink>
			<MenuCategoryNavLink to={'/cuisine/Italian'}>
				<GiPizzaSlice />
				<h4>Italian</h4>
			</MenuCategoryNavLink>
			<MenuCategoryNavLink to={'/cuisine/Thai'}>
				<GiNoodles />
				<h4>Thai</h4>
			</MenuCategoryNavLink>
			<MenuCategoryNavLink to={'/cuisine/Mediterranean'}>
				<GiOlive />
				<h4>Mediterranean</h4>
			</MenuCategoryNavLink>
		</IconList>
	);
}
