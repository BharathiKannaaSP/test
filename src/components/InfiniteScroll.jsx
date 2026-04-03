import { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const InfiniteScroll = () => {
	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const observer = useRef();
	const limit = 10;
	const { data, loading } = useFetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit * page}`, 5);
	console.log(data);

	const lastProductRef = useCallback(
		(node) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore ) {
					setPage((prev) => prev + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[hasMore],
	);

	if (loading) return 'Loading';

	return (
		<div>
			{data?.map((item, index) => {
				const lastProduct = index === data.length - 1;
				return (
					<div
						style={{ padding: '20px' }}
						key={item.title}
						ref={lastProduct ? lastProductRef : null}>
						{item.title}
					</div>
				);
			})}
		</div>
	);
};

export default InfiniteScroll;
