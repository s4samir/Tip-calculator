import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import "./NumInput.scss";

const NumInput = ({
  onValueChange,
  labelText,
  arialLabel,
  iconClassname,
  numType,
  reset = false
}) => {
  const [num, dispatch] = useNumReducer(0, numType);

  useEffect(() => {
    if (reset) {
      dispatch(0);
    }
  }, [dispatch, reset]);

  useEffect(() => {
    onValueChange(num);
  }, [num, onValueChange]);

  const onChange = (event) => {
    const val = event.target.value;
    dispatch(val);
  };

  return (
    <div className={"num-input section"}>
      <label className={"section-label"}>{labelText}</label>
      <div className={`input-container ${iconClassname}`}>
        <input
          type="text"
          aria-label={arialLabel}
          value={num}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const useNumReducer = (init = 0, type) => {
  const NumType = {
    INT_TYPE: /^\d*$/,
    FLOAT_TYPE: /^\d*(\.\d{0,2})?$/
  };
  const reducer = (state, newValue) => {
    return NumType[type].test(newValue) ? newValue : state;
  };

  return  useReducer(reducer, init, (i) => i);
};

NumInput.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  arialLabel: PropTypes.string.isRequired,
  iconClassname: PropTypes.string,
  reset: PropTypes.bool,
  numType: PropTypes.oneOf(["INT_TYPE", "FLOAT_TYPE"])
};

NumInput.defaultProps = {
  labelText: "provide a labelText",
  arialLabel: "provide input description",
  iconClassname: "",
  onValueChange: () => {},
  numType: "INT_TYPE",
  reset: false
};

export default NumInput;
