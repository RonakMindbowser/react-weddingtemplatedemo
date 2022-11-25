import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppHeader from "../components/appHeader/AppHeader";
import AboutUs from "../components/containers/aboutus/AboutUs";
import Blog from "../components/containers/blog/Blog";
import ContactScreen from "../components/containers/contact/ContactScreen";
import HomeScreen from "../components/containers/home/HomeScreen";
import Shop from "../components/containers/shop/Shop";

const SecondAppMain = () => {
    return (
        <div>
            <React.StrictMode>
                <BrowserRouter>
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<Navigate to={'home'} />} />
                        <Route path="home" element={<HomeScreen />} />
                        <Route path="aboutus" element={<AboutUs />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="contactus" element={<ContactScreen />} />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    )
}

export default SecondAppMain;