import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
	isAuthenticated: false
};

const AuthSlice = createSlice({
	name: 'authentication',
	initialState: authInitialState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
