import React from 'react';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useEffect } from 'react';

const Debounce = () => {
	const [value, setValue] = useState('');

	const debouncedSearch = useDebounce(value, 1000);

	useEffect(() => {
		console.log('Calling API', debouncedSearch);
	}, [debouncedSearch]);

	return (
		<input
			type='text'
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default Debounce;
