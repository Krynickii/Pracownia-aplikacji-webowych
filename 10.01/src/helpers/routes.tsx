import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

interface RouteElement {
    name: string,
    path: string,
    element: React.JSX.Element,
}

export const routes: Array<RouteElement> = [
    { name: "Home", path: "/", element: <Home/>},
    { name: "About", path: "/about", element: <About/>},
    { name: "Contact", path: "/contact", element: <Contact/>}
]