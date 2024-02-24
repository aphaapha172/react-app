import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../../types/user.types";

export {};

export type UserState = {
  user: User | null;
  access_token: string | null;
};

const initialState: UserState = {
  user: null,
  access_token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: User; access_token: string }>
    ) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    resetUserSlice: () => {
      return initialState;
    },
  },
});
export const { setUser, resetUserSlice } = userSlice.actions;
export default userSlice.reducer;
