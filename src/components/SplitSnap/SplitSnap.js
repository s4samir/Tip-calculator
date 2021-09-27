import React from "react";
import SnapRow from "../SnapRow/SnapRow";
import "./SplitSnap.scss";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { resetBill } from "../BillAmt/billAmtSlice";
import { resetTip } from "../TipSelector/tipSelectorSlice";
import { resetPeopleCount } from "../PeopleCount/peopleCountSlice";

const billValue = (state) => state.billAmt.value;
const peopleCountState = (state) => state.peopleCount.value;
const tipState = (state) => state.tip.value;

const SplitSnap = () => {
  const dispatch = useDispatch();
  const getBillDetail = createSelector(
    [billValue, peopleCountState, tipState],
    (billValue, peopleCount, tip) => {
      let tipPerHead = 0,
        totalPerHead = 0;
      const totalTip = (billValue * tip) / 100;
      const total = billValue + totalTip;
      if (peopleCount) {
        tipPerHead = totalTip / peopleCount;
        totalPerHead = total / peopleCount;
      }
      return [tipPerHead, totalPerHead];
    }
  );

  const [tipPerHead, totalPerHead] = useSelector((state) =>
    getBillDetail(state)
  );

  const reset = () => {
    dispatch(resetBill());
    dispatch(resetTip());
    dispatch(resetPeopleCount());
  };

  return (
    <div className={"split-snap section"}>
      <SnapRow desc={"Tip Amount"} amt={tipPerHead} />
      <SnapRow desc={"Total"} amt={totalPerHead} />
      <div className={"reset-container"}>
        <button className={"reset"} onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};

SplitSnap.propTypes = {};

export default SplitSnap;
