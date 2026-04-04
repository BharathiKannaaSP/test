// @ts-expect-error - this JS component doesn't have an associated .d.ts

// import { useContext } from 'react';
// import InfiniteScroll from './components/InfiniteScroll';
// import MemoAndCallback from './components/MemoAndCallBack';
// import Debounce from './components/Debounce.jsx';
import Redux from './components/Redux.jsx';

function App() {
	// const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			{/* <InfiniteScroll /> */}
			{/* <MemoAndCallback /> */}
			{/* <Debounce /> */}
			<Redux />
		</>
	);
}

export default App;

// import Callback from './components/Callback';
// import Counter from './components/Counter';
// import Memo from './components/Memo';

// const App = () => {
// const [products, setProducts] = useState([]);
// const [page, setPage] = useState(0);
// const [hasMore, setHasMore] = useState(true);
// const [isLoading, setIsLoading] = useState(false);
// const observer = useRef();

// const limit = 10;

// useEffect(() => {
// 	let isMounted = true;
// 	const fetchProducts = async (page) => {
// 		setIsLoading(true);
// 		try {
// 			const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`);
// 			const data = response.data;
// 			if (isMounted) {
// 				setProducts((prev) => [...prev, ...data.products]);
// 				setHasMore(data.products.length === limit);
// 			}
// 		} catch (error) {
// 			console.error('Error fetching products:', error);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};
// 	fetchProducts(page);
// 	return () => {
// 		isMounted = false;
// 	};
// }, [page]);

// const lastProductRef = useCallback(
// 	(node) => {
// 		if (isLoading) return;
// 		if (observer.current) observer.current.disconnect();

// 		observer.current = new IntersectionObserver((entries) => {
// 			if (entries[0].isIntersecting && hasMore) {
// 				setPage((prev) => prev + 1);
// 			}
// 		});

// 		if (node) observer.current.observe(node);
// 	},
// 	[isLoading, hasMore],
// );

// // Context API
// const { theme, toggleTheme } = useContext(ThemeContext);

// return (
// <>
// <Counter />
{
	/* <JSQuestions /> */
}
{
	/* <Memo /> */
}
{
	/* <Callback /> */
}
{
	/* <button onClick={() => toggleTheme()}>{theme === 'light' ? 'Switch to Dark' : 'Switch to light'}</button>
			<div className={theme === 'light' ? 'light' : 'dark'}>
				{products.map((item, index) => {
					const isLastProduct = products.length - 1 === index;
					return (
						<div
							key={item.id}
							ref={isLastProduct ? lastProductRef : null}>
							{item.title}
						</div>
					);
				})}
			</div> */
}
// </>
// );
// };

// export default App;
