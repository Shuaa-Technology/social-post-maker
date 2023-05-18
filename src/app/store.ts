import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import TemplatesStore from "./store/TemplatesStore";
import AppearanceSlice from "./store/AppearanceStore";

export const store = configureStore({
  reducer: {
    appearance: AppearanceSlice,
    templatesStore: TemplatesStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
