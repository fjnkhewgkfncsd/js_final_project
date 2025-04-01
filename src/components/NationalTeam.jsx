import React from "react";
import List from "../Data/nationalTeam";
import Display from "./Display_and_switch_img";

const NationalTeam = () => {
    return (
        <Display Images={List} className={"image-title A"}/>
    );
};

export default NationalTeam;