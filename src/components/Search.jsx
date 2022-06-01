import { FaSearch } from 'react-icons/fa';
import { FormSearch } from '../styledComponents';
import { useState } from 'react';
export default function Search() {
	const [inputText, setInputText] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		console.log(inputText);
	};
	return (
		<FormSearch onSubmit={submitHandler}>
			<FaSearch />
			<input
				onChange={e => setInputText(e.target.value)}
				type='text'
				value={inputText}
			/>
		</FormSearch>
	);
}
