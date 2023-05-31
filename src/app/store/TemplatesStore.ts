import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";
import { TemplatesService } from "../../core/Services/TemplatesService";
import {ITEMS_PER_PAGE} from "../../config/templates";
import { Template } from "../../core/Models/Template/Template";

export interface TemplateLoadingState {
    currentTemplate: TemplateInterface;
    templates: TemplateInterface[];
    status: "idle" | "loading" | "failed";
    status_message: string | null;
}

const templatesService = new TemplatesService();

const initialState: TemplateLoadingState = {
    currentTemplate: templatesService.getDefaultTemplate(),
    templates: [],
    status: "idle",
    status_message: null,
};

export const loadTemplates = createAsyncThunk(
    "templates/load/all",
    async ({ page = 1, limit = ITEMS_PER_PAGE }: { page?: number; limit?: number }, { rejectWithValue, getState }) => {
        try {
            const response = await templatesService.getTemplates(page, limit);
            return { response, page };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const selectTemplate = createAsyncThunk(
  "templates/select",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await templatesService.getTemplateById(id);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);


export const TemplatesStore = createSlice({
  name: "Templatestore",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateTemplateSettings: (state, action: PayloadAction<{handle: string, value: string}>) => {
       let template =   state.currentTemplate;
     
       state.currentTemplate =  Template.updateSettingsByKey(template, action.payload.handle,action.payload.value);
       console.log(state.currentTemplate)
  },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loadTemplates.pending, (state) => {
        state.status = "loading";
        state.status_message = "loading data...";
      })
        .addCase(loadTemplates.fulfilled, (state, action) => {
            state.status = "idle";
            const { response, page } = action.payload;
            console.log(response)
            state.templates = state.templates.concat(response);
          //  state.page = page;
        })
      .addCase(loadTemplates.rejected, (state) => {
        state.status = "failed";
        state.status_message = "Fetching templates  error, try again...";
      });
    builder
      .addCase(selectTemplate.pending, (state) => {
        state.status = "loading";
        state.status_message = "loading data...";
      })
      .addCase(selectTemplate.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentTemplate =
          action.payload ?? templatesService.getDefaultTemplate();
      })
      .addCase(selectTemplate.rejected, (state) => {
        state.status = "failed";
        state.status_message = "Fetching Template Data error, try again...";
      });
  },
});

export const getTemplatesStore = (state: RootState) => state.templatesStore; //with Thunk utilities

export const getCurrentTemplate = (state: RootState) => state.templatesStore.currentTemplate; 
export const getTemplates = (state: RootState) => state.templatesStore.templates;

export const { updateTemplateSettings } = TemplatesStore.actions;

export default TemplatesStore.reducer;
