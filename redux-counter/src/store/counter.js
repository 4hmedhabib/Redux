import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
	counter: 0,
	showCounter: true
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
