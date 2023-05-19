import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode } from "../../core/Models/Configuration/Appearance/ThemeMode";
import {ThemeModeInterface} from "../../core/Models/Configuration/Appearance/ThemeModeInterface";

export interface AppearanceState {
    currentThemeMode: ThemeMode;
    themeModes: ThemeMode[];
}

// TODO: Move static data
const defaultMode: ThemeMode = new ThemeMode('light', 'Light Theme', );
const darkMode: ThemeMode = new ThemeMode('dark', 'Dark Theme');

const initialState: AppearanceState = {
    currentThemeMode: defaultMode,
    themeModes: [
        defaultMode,
        darkMode
        // Add more themes here as needed
    ],
};

const appearanceSlice = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeModeInterface>) => {
            state.currentThemeMode = action.payload;
        },
    },
});

export const { setThemeMode } = appearanceSlice.actions;
export default appearanceSlice.reducer;
