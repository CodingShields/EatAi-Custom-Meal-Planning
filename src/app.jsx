import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Support from './Pages/Support.jsx';
import About from './Pages/About.jsx';
import Pantry from './Pages/Pantry.jsx';
import HomeLayout from './Layouts/Home-Layout.jsx';
import SignIn from './comp/SignIn.jsx';
import SignUp from './comp/NewSignUp.jsx';
import Account from './Pages/SubPage/Account.jsx';
import DashBoardLayout from './Layouts/Dash-Board-Layout.jsx';
import Welcome from './Pages/SubPage/Welcome.jsx';
import ChefSurprise from './Pages/SubPage/Chef-Surprise.jsx';
import EasyOrder from './Pages/SubPage/Easy-Order.jsx';
import AdvancedOrder from './Pages/SubPage/Advanced-Order.jsx';
import { AuthContextProvider } from './Context/AuthContext.jsx';
import ProtectedRoute from './comp/ProtectedRoute.jsx';
import './index.css';
import { UserContextProvider } from './Context/UserContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<SignIn />} />
              <Route path="About" element={<About />} />
              <Route path="Support" element={<Support />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
                <Route path="MembersArea" element={<DashBoardLayout />}>
                  <Route path="Welcome" element={<Welcome />} />
                  <Route path="ChefSurprise" element={<ChefSurprise />} />
                  <Route path="EasyOrder" element={<EasyOrder />} />
                  <Route path="AdvancedOrder" element={<AdvancedOrder />} />
                  <Route path="Pantry" element={<Pantry />} />
                  <Route path="Account" element={<Account />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </UserContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
