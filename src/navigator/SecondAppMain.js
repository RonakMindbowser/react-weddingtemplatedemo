import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppFooter from "../components/appfooter/AppFooter";
import AppHeader from "../components/appHeader/AppHeader";
import ContactInfo from "../components/contactinfo/ContactInfo";
import AboutUs from "../containers/aboutus/AboutUs";
import Blog from "../containers/blog/Blog";
import ContactScreen from "../containers/contact/ContactScreen";
import HomeScreen from "../containers/home/HomeScreen";
import Workshop from "../containers/pages/workshop/Workshop";
import Shop from "../containers/shop/Shop";

const SecondAppMain = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

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
                        <Route path="workshop" element={<Workshop />} />
                    </Routes>
                    <ContactInfo />
                    <AppFooter />
                </BrowserRouter>
            </React.StrictMode>
        </div>
    )
}

export default SecondAppMain;