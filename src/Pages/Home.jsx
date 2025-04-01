import React from "react";
import AnimationText from "../components/Animation/ScrollVelocity";
import "../Styles/Home.css";
import EuporeClubList from "../components/EuporeClubList";
import {Link} from "react-router-dom";
import Messi from "../assets/Pictures/messi2.jpg";
import Jersey_list from "../components/Card";
import Bayern from "../assets/Pictures/bayernba.jpg"
import National from "../components/NationalTeam"
import Neymar from "../assets/Pictures/NINTCHDBPICT000519792063-e1570616451726-scaled.jpg"

export function Home(){
    return(
        <>
            <div className="Landing_img">
            </div>
            <div className="euporelist">
                <AnimationText texts={['DELIVERY IS FREE — SHOP NOW ', 'NEW COLLECTION AVAILABLE!']} velocity={100} className="custom-scroll-text"/>
                <div className="eupore_club">
                    <h1>EUPORE CLUB</h1>
                    <EuporeClubList />
                </div>
            </div>
            <div className="Messi">
                <Link><img src={Messi} alt="Messi GAOT" /></Link>
                <div className="insideMessi">
                    <h2>FC Barcelona Jerysey Home 17-18</h2>
                    <p style={{color:"white"}}>Lightweight and breathable jersey.</p>
                    <h1>$29.99</h1>
                </div>
            </div>
            <div className="jersey_list">
                <h1>SPECIAL OFFER</h1>
                <Jersey_list />
            </div>
            <div className="bayern">
                < Link><img src={Bayern} alt="Messi GAOT" /></Link>
                <div className="insidebayern">
                    <h2>Bayern Authentic Home Jersey 24-25</h2>
                    <p style={{color:"white"}}>Lightweight and breathable jersey designed for ultimate comfort and performance.</p>
                    <h1>$29.99</h1>
                </div>
            </div>
            <div className="national">
                <h1>NATIONAL TEAM</h1>
                <National/>
            </div>
            <div className="neymar">
                <Link><img src={Neymar} alt="" /></Link>
                <div className="inside_neymar">
                    <h2>Brazil Jersey</h2>
                    <p style={{color:"white"}}>Lightweight and breathable jersey.</p>
                    <h1>29.99$</h1>
                </div>
            </div>
        </>
    );
}