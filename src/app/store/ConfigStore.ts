import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeModeInterface } from "../../core/Models/Configuration/Appearance/ThemeModeInterface";
import { Configuration } from "../../core/Configuration";
import {RootState} from "../store";

export interface ConfigStoreState {
    currentThemeMode: ThemeModeInterface;
    themeModes: ThemeModeInterface[];
}

const configService = new Configuration();

const initialState: ConfigStoreState = {
    currentThemeMode: configService.getDefaultThemeMode(),
    themeModes: configService.getThemeModes()
};

const configStoreSlice = createSlice({
    name: 'configstore',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeModeInterface>) => {
            state.currentThemeMode = action.payload;
        },
    },
});


export const getCurrentThemeMode = (state: RootState) => state.configStore.currentThemeMode;
export const getThemeModes = (state: RootState) => state.configStore.themeModes;
export const { setThemeMode } = configStoreSlice.actions;
export default configStoreSlice.reducer;
