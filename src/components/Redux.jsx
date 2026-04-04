import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/actions';

const Redux = () => {
	const count = useSelector((state) => state.count);
	console.log(count);
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(INCREMENT())}>+</button>
			{count}
			<button onClick={() => dispatch(DECREMENT())}>-</button>
		</div>
	);
};

export default Redux;
