import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Pantry from "./Pages/Pantry.jsx"
import Layout from "./comp/Layout.jsx"
import Login from "./Pages/Login.jsx"
import DashBoardLayout from './comp/Dash-Board-Layout.jsx';
import Kitchen from "./Pages/SubPage/Kitchen.jsx"
import ChefSurprise from './Pages/SubPage/Chef-Suprise.jsx';
import EasyOrder from './Pages/SubPage/Easy-Order.jsx'
import AdvancedOrder from './Pages/SubPage/Advanced-Order.jsx';
import "./index.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Pantry" element={<Pantry />} />
          <Route path="PersonalChef" element={<DashBoardLayout />}>
          <Route
            path="login"
            element={<Login />}
          />
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

