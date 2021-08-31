import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
	showCounter: true
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
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

const store = configureStore({
	reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
