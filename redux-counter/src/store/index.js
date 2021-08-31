import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterInitialState = {
	counter: 0,
	showCounter: true
};

const authInitialState = {
	isAuthenticated: false
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,
	reducers: {
		increase(state) {
			state.counter++;
		},
		decrease(state) {
			state.counter--;
		},
		increment(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggler(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

const AuthSlice = createSlice({
	name: 'authentication',
	initialState: authInitialState,
	reducers: {
		login(state) {},
		logout(state) {}
	}
});

const store = configureStore({
	reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export const authActions = AuthSlice.actions;

export default store;
