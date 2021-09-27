import React from 'react';
import PropTypes from 'prop-types';
import "./SnapRow.scss";
import {ReactComponent as Dollar} from "../../assets/images/icon-dollar.svg";

const SnapRow = ({desc = "", amt = 0}) => {
    return (
        <div className={"snap-row"}>
            <div className={"desc"}>
                <span>{desc}</span>
                <span>{"/ person"}</span>
            </div>
            <span className={"amt"}>
                <Dollar/>
                {amt}
            </span>
        </div>
    );
};

SnapRow.propTypes = {
    desc: PropTypes.string,
    amt:PropTypes.number
};

export default SnapRow;