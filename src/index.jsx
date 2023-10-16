import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Pantry from "./Pages/Pantry.jsx"
import Layout from "./comp/Layout.jsx"
import Login from "./comp/Login.jsx"
import SignUp from './comp/SignUp.jsx';
import Account from "./comp/Account.jsx"
import DashBoardLayout from './comp/Dash-Board-Layout.jsx';
import Welcome from "./Pages/SubPage/Welcome.jsx"
import ChefSurprise from './Pages/SubPage/Chef-Suprise.jsx';
import EasyOrder from './Pages/SubPage/Easy-Order.jsx'
import AdvancedOrder from './Pages/SubPage/Advanced-Order.jsx';
import {AuthContextProvider} from './Context/AuthContext'
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Account" element={<Account />} />
                      <Route path="Pantry" element={<Pantry />} />
                      <Route path="Kitchen" element={<DashBoardLayout />}>
                      <Route pat = "Welcome" element={<Welcome />} />
                      <Route path="ChefSurprise" element={<ChefSurprise />} />
                      <Route path="EasyOrder" element={<EasyOrder />} />
                      <Route path="AdvancedOrder" element={<AdvancedOrder />} />
                    </Route>
                  </Route>
              </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}


export default App;

