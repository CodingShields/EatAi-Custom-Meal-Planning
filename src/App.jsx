import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Pantry from "./Pages/Pantry.jsx"
import Layout from "./comp/Layout.jsx"
import DashBoardLayout from './comp/DashBoardLayout.jsx';
import Kitchen from "./Pages/SubPage/Kitchen.jsx"
import ChefSurprise from './Pages/SubPage/ChefSuprise.jsx';
import EasyOrder from './Pages/SubPage/EasyOrder.jsx'
import AdvancedOrder from './Pages/SubPage/AdvancedOrder.jsx';
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
            <Route index element ={<Kitchen />} />
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

