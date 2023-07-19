import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // setUsername: (state, action: PayloadAction<string>) => {
        //     state.username = action.payload;
        // },
        // setPassword: (state, action: PayloadAction<string>) => {
        //     state.password = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
