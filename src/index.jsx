import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home.jsx';
import Support from './Pages/Support.jsx';
import About from './Pages/About.jsx';
import Pantry from './Pages/Pantry.jsx';
import HomeLayout from './Layouts/Home-Layout.jsx';
import SignIn from './comp/SignIn.jsx';
import SignUp from './comp/SignUp.jsx';
import Account from './comp/Account.jsx';
import DashBoardLayout from './Layouts/Dash-Board-Layout.jsx';
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
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<SignIn />} />
            <Route path="About" element={<About />} />
            <Route path="Support" element={<Support />} />
            <Route path="SignUp" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
                <Route path="MembersArea" element={<DashBoardLayout />}>
                <Route path="/MembersArea/Welcome" element={<Welcome />} />
                <Route path="/MembersArea/ChefSurprise" element={<ChefSurprise />} />
                <Route path="/MembersArea/EasyOrder" element={<EasyOrder />} />
                <Route path="/MembersArea/AdvancedOrder" element={<AdvancedOrder />} />
                <Route path="/MembersArea/Pantry" element={<Pantry />} />
                <Route path="/MembersArea/Account" element={<Account />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
