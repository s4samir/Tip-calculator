import React, { useEffect, useState } from "react";
import "./TipSelector.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateTip } from "./tipSelectorSlice";

const TipSelector = () => {
  const options = [5, 10, 15, 25, 50];
  const dispatch = useDispatch();

  const [customTip, setCustomTip] = useState("");
  const reset = useSelector((state) => state.tip.value.reset);
  useEffect(() => {
    if (reset) setCustomTip("");
  }, [reset]);

  const handleCustomTip = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      const curr = parseInt(value, 10);
      if (curr <= 100) {
        dispatch(updateTip(value));
        setCustomTip(value);
      }
    }
  };

  return (
    <div className={"tip-selector section"}>
      <label className={"section-label"}>Select Tip %</label>
      <div className={"tips"}>
        {options.map((val) => (
          <button
            key={val}
            className={"tip"}
            onClick={() => dispatch(updateTip(val))}
          >{`${val}%`}</button>
        ))}
        <div className={"tip"}>
          <input
            placeholder={"Custom"}
            type="text"
            onChange={handleCustomTip}
            value={customTip}
          />
        </div>
      </div>
    </div>
  );
};

TipSelector.propTypes = {};

export default TipSelector;
