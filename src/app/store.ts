import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import Templatestore from "./store/Templatestore";

export const store = configureStore({
  reducer: {
    templates: Templatestore,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
