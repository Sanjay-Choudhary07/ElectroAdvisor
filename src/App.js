import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import ProductDetailsBox from './components/productDetails/ProductDetails';
import Tabs from './components/tabs/Tabs';
import Services from './components/services/Services';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <ProductDetailsBox />
            <div className="row-area">
              <Tabs />
              <Routes>
                <Route path="/Queries/Repair" element={<Services />} />
                <Route path="/Queries/Replacement" element={<Services />} />
                <Route path="/Queries/Safety" element={<Services />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
