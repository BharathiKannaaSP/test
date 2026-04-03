import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
	console.log('Child re-rendered');
	return <button onClick={onClick}>Click</button>;
});

export default function Callback() {
	const [count, setCount] = useState(0);

	const handleClick = useCallback(() => {
		console.log('Clicked');
	}, []);

	return (
		<>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>

			<Child onClick={handleClick} />
		</>
	);
}
