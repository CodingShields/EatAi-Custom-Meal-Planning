import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Pantry from "./Pages/Pantry.jsx"
import Layout from "./comp/Layout.jsx"
import DashBoardLayout from './comp/DashBoardLayout.jsx';
import Dashboard from "./Pages/Dashboard.jsx"
import ChefSurprise from './Pages/ChefSuprise.jsx';
import EasyOrder from './Pages/EasyOrder.jsx';
import AdvancedOrder from './Pages/AdvancedOrder.jsx';
import "./index.css"
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Pantry" element={<Pantry />} />
          <Route path="PersonalChef" element={<DashBoardLayout />}>
            {/* Remove the index route */}
            <Route path="DashBoard" element ={<Dashboard />} />
            <Route path="ChefSurprise" element={<ChefSurprise />} />
            <Route path="EasyOrder" element={<EasyOrder />} />
            <Route path="AdvancedOrder" element={<AdvancedOrder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

