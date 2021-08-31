import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const show = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increase());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increment(10));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrease());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggler());
	};

	const counterValue = <div className={classes.value}>{counter}</div>;

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && counterValue}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase By 10</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
