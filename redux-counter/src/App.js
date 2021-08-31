import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

function App() {
	return (
		<Fragment>
			<Header />
			<Auth />
			{/* <UserProfile /> */}
			<Counter />
		</Fragment>
	);
}

export default App;
