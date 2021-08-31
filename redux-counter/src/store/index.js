import { configureStore } from '@reduxjs/toolkit';

import counterReduce from './counter';
import authReduce from './auth';

const store = configureStore({
	reducer: {
		counter: counterReduce,
		auth: authReduce
	}
});

export default store;
