import { createSlice } from '@reduxjs/toolkit';
import {AppearanceState} from "../../core/Models/Configuration/Appearance/AppearanceInterface";

const initialState: AppearanceState = {
    themeMode: 'light',
};

const AppearanceSlice = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        setThemeMode: (state, action) => {
            state.themeMode = action.payload;
        },
    },
});

export const { setThemeMode } = AppearanceSlice.actions;
export default AppearanceSlice.reducer;
