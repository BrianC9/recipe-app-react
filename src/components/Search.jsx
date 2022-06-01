import { FaSearch } from 'react-icons/fa';
import { FormSearch } from '../styledComponents';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Search() {
	const [inputText, setInputText] = useState('');
	const navigate = useNavigate();
	const submitHandler = e => {
		e.preventDefault();
		if (inputText.trim().length === 0) return;
		navigate(`searchresult/${inputText}`);
		setInputText('');
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
