import { createSlice } from "@reduxjs/toolkit";

export const tipSelectorSlice = createSlice({
  name: "tip",
  initialState: {
    value: 0,
    reset: ""
  },
  reducers: {
    updateTip: (state, { payload }) => {
      state.value = payload;
      state.reset = false;
    },
    resetTip: (state) => {
      state.value = "";
      state.reset = true;
    }
  }
});

export const { updateTip, resetTip } = tipSelectorSlice.actions;

export default tipSelectorSlice.reducer;
