import { createSlice } from "@reduxjs/toolkit";

export const billAmtSlice = createSlice({
  name: "billAmt",
  initialState: {
    value: "",
    reset: false
  },
  reducers: {
    updateBillValue: (state, { payload }) => {
      state.value = payload;
      state.reset = false;
    },
    resetBill: (state) => {
      state.value = 0;
      state.reset = true;
    }
  }
});

export const { resetBill, updateBillValue } = billAmtSlice.actions;
export default billAmtSlice.reducer;
