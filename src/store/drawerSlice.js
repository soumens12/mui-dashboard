import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        isDrawerOpen: true, // true = full, false = mini
    },
    reducers: {
        toggleDrawer: (state) => {
            state.isDrawerOpen = !state.isDrawerOpen;
        },
        openDrawer: (state) => {
            state.isDrawerOpen = true;
        },
        closeDrawer: (state) => {
            state.isDrawerOpen = false;
        },
    },
});

export const { toggleDrawer, openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;