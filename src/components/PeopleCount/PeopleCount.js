import React from "react";
import NumInput from "../NumInput/NumInput";
import { useDispatch, useSelector } from "react-redux";
import {updatePeopleCount} from "./peopleCountSlice";

const PeopleCount = () => {
  const currentVal = useSelector((state) => state.peopleCount);
  const dispatch = useDispatch();
  const onValueChange = (peopleCount) => {
    dispatch(updatePeopleCount(peopleCount));
  };

  return (
    <>
      <NumInput
        labelText={"Number of People"}
        arialLabel={"Provide total number of people"}
        iconClassname={"person"}
        onValueChange={onValueChange}
        currentVal ={currentVal.value}
        reset={currentVal.reset}
      />
    </>
  );
};

export default PeopleCount;
