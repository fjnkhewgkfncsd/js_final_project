import React from 'react';
import List from "../Data/list_of_jersey";
import Display from './Display_and_switch_img';
const Card= () => {
    return(
        <Display Images={List} className={"Jersey"}/>
    );
};
export default Card;