import { configureStore } from "@reduxjs/toolkit";
import billAmtSlice from "../components/BillAmt/billAmtSlice";
import peopleCountSlice from "../components/PeopleCount/peopleCountSlice";
import tipSelectorSlice from "../components/TipSelector/tipSelectorSlice";

export default configureStore({
  reducer: {
    billAmt: billAmtSlice,
    peopleCount: peopleCountSlice,
    tip: tipSelectorSlice
  }
});
