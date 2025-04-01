import React from "react";
import "../Styles/Shop.css";
import Products from "../Data/jersey_shop";
import List_product from "../components/ProductList"

const Shop = () => {
    return (
        <div className="container">
            <div className="Shop-bg">
                <h1>All Jerseys</h1>
            </div>
            <List_product products={Products} />
        </div>
    )
}
export default Shop;