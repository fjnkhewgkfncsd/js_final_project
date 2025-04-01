import React from "react";
import { Link } from "react-router-dom";
import List from "../Data/list_of_eupore_club";
import Display from "./Display_and_switch_img";
import "../Styles/eupore_style.css";

const EuporeClubList = () => {
    return (
        <Display Images={List} className={"image-title"}/>
    );
};
export default EuporeClubList;
