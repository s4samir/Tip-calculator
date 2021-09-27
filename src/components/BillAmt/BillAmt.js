import React from "react";
import NumInput from "../NumInput/NumInput";
import { useSelector, useDispatch } from "react-redux";
import { updateBillValue } from "./billAmtSlice";

const BillAmt = () => {
  const currentVal = useSelector((state) => state.billAmt);
  const dispatch = useDispatch();
  const onValueChange = (billValue) => {
    dispatch(updateBillValue(billValue));
  };
  return (
    <>
      <NumInput
        labelText={"Bill"}
        arialLabel={"Provide total bill amount"}
        iconClassname={"dollar"}
        numType={"FLOAT_TYPE"}
        onValueChange={onValueChange}
        currentVal={currentVal.value}
        reset={currentVal.reset}
      />
    </>
  );
};

export default BillAmt;
