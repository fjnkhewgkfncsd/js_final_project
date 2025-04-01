import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./components/ProductDetail"
import Cart from "./Pages/Cart"
import Fav from "./Pages/favorite"
import Collection from "./Pages/collection"
import About from "./Pages/About"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/Shop' element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/Shopping_cart" element={<Cart />} />
                    <Route path="/Favorite" element={<Fav />} />
                    <Route path="collections/:leagueId" element={<Collection/>}></Route>
                    <Route path="/About" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;