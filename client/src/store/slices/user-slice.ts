import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutorizationStatus } from '../../const';

type UserState = {
  authorizationStatus: typeof AutorizationStatus[keyof typeof AutorizationStatus];
  email: string | null;
};

const initialState: UserState = {
  authorizationStatus: AutorizationStatus.Auth,
  email: 'user@example.com',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus: (
      state,
      action: PayloadAction<typeof AutorizationStatus[keyof typeof AutorizationStatus]>
    ) => {
      state.authorizationStatus = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    requireAuth: (state) => {
      state.authorizationStatus = AutorizationStatus.Auth;
    },
    requireLogout: (state) => {
      state.authorizationStatus = AutorizationStatus.NoAuth;
      state.email = null;
    },
  },
});

export const { setAuthorizationStatus, setEmail, requireAuth, requireLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;

