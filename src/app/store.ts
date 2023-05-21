import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import TemplatesStore from "./store/TemplatesStore";
import ConfigStore from "./store/ConfigStore";

export const store = configureStore({
  reducer: {
    configStore: ConfigStore,
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
