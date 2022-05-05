import React from "react";
import CreateProductPage from "./pages/CreateProductPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";


const App: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#ECECEC] pt-10 px-20">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-product' element={<CreateProductPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
