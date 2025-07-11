import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";
//test/test
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import app1 from "../src/img/portfolio/app-1.jpg";
import app2 from "../src/img/portfolio/app-2.jpg";
import app3 from "../src/img/portfolio/app-3.jpg";
import product1 from "../src/img/portfolio/product-1.jpg";
import product3 from "../src/img/portfolio/product-3.jpg";
import branding1 from "../src/img/portfolio/branding-1.jpg";
import book1 from "../src/img/portfolio/books-1.jpg";
import book2 from "../src/img/portfolio/books-2.jpg";
import book3 from "../src/img/portfolio/books-3.jpg";
import Hireus from "../src/services/Hireus";
import Smm from "../src/services/Smm";
import Smo from "../src/services/Smo";
import Ppc from "../src/services/Ppc";
import VideoEditing from "../src/services/VideoEditing";
import GraphicDesigning from "../src/services/GraphicDesigning";
import { useState } from "react";

const Routings = () => {
  const [sub, setSub]= useState("");
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home subject={sub} setSubject={setSub} />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment   />} />
        <Route path="/seo" element={<Seo/>} />
        <Route path="/smm" element={<Smm/>} />
        <Route path="/smo" element={<Smo/>} />
        <Route path="/ppc" element={<Ppc/>} />
        <Route path="/videoEditing" element={<VideoEditing/>} />
        <Route path="/graphicDesigning" element={<GraphicDesigning/>} />
        <Route path="/campagin-creation" element={<Campaign />} />
        <Route path="/hireus" element={<Hireus emailSubject={sub}/>} />
        <Route path="Marketing-Website/portfolio">
          <Route path="app1" element={<ProductsTemp img={app1} />} />
          <Route path="product1" element={<ProductsTemp img={product1} />} />
          <Route path="brand1" element={<ProductsTemp img={branding1} />} />
          <Route path="book1" element={<ProductsTemp img={book1} />} />
          <Route path="app2" element={<ProductsTemp img={app2} />} />
          <Route path="book3" element={<ProductsTemp img={book3} />} />
          <Route path="product3" element={<ProductsTemp img={product3} />} />
          <Route path="book2" element={<ProductsTemp img={book2} />} />
          <Route path="app3" element={<ProductsTemp img={app3} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routings;
