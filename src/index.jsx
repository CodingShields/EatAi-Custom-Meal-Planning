import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Pantry from './Pages/Pantry.jsx';
import Layout from './comp/Layout.jsx';
import SignIn from './comp/SignIn.jsx';
import SignUp from './comp/SignUp.jsx';
import Account from './comp/Account.jsx';
import DashBoardLayout from './comp/Dash-Board-Layout.jsx';
import Welcome from './Pages/SubPage/Welcome.jsx';
import ChefSurprise from './Pages/SubPage/Chef-Surprise.jsx';
import EasyOrder from './Pages/SubPage/Easy-Order.jsx';
import AdvancedOrder from './Pages/SubPage/Advanced-Order.jsx';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './comp/ProtectedRoute.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            
            <Route path="MembersArea/*" element={
              <ProtectedRoute>
                <DashBoardLayout>
                  <Route index element={<Welcome />} />
                  <Route path="ChefSurprise" element={<ChefSurprise />} />
                  <Route path="EasyOrder" element={<EasyOrder />} />
                  <Route path="AdvancedOrder" element={<AdvancedOrder />} />
                  <Route path="Pantry" element={<Pantry />} />
                  <Route path="Account" element={<Account />} />
                </DashBoardLayout>
              </ProtectedRoute>
            }/>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
