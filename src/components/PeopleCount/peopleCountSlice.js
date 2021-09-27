import { createSlice } from "@reduxjs/toolkit";

export const peopleCountSlice = createSlice({
  name: "peopleCount",
  initialState: {
    value: "",
    reset: false
  },
  reducers: {
    updatePeopleCount: (state, { payload }) => {
      state.value = payload;
      state.reset = false;
    },
    resetPeopleCount: (state) => {
      state.value = 0;
      state.reset = true;
    }
  }
});

export const { resetPeopleCount, updatePeopleCount } = peopleCountSlice.actions;
export default peopleCountSlice.reducer;
