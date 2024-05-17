import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MainPage
import HomeLayout from "./Layouts/Home-Layout.jsx";
import Support from "./Pages/Support.jsx";
import About from "./Pages/About.jsx";
import Pantry from "./Pages/Pantry.jsx";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import Social from "./Pages/Social.jsx";
// Sub Pages
import Welcome from "./Pages/SubPage/Welcome.jsx";
import ChefSurprise from "./Pages/SubPage/Chef-Surprise.jsx";
import EasyOrder from "./Pages/SubPage/Easy-Order.jsx";
import AdvancedOrder from "./Pages/SubPage/Advanced-Order.jsx";
// Account Pages
import AccountPage from "./Pages/SubPage/Account-Comps/AccountPage.jsx";
import Profile from "./Pages/SubPage/Account-Comps/Profile.jsx";
import EasyOrderPantry from "./Pages/SubPage/Account-Comps/Easy-Order-Pantry.jsx";
import AdvancedOrderPantry from "./Pages/SubPage/Account-Comps/Advanced-Order-Pantry.jsx";

// Other Comps and Imports
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import ProtectedRoute from "./comp/ProtectedRoute.jsx";
import SignIn from "./comp/SignIn.jsx";
import SignUp from "./comp/SignUp.jsx";
import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route index element={<SignIn />} />
					<Route path='about' element={<About />} />
					<Route path='sign-up' element={<SignUp />} />
					<Route element={<ProtectedRoute />}>
						<Route path='members-area' element={<HomeLayout />}>
							<Route path='welcome' element={<Welcome />} />
							<Route path='dashboard' element={<DashBoardPage />} />
							<Route path='chef-surprise' element={<ChefSurprise />} />
							<Route path='easy-order' element={<EasyOrder />} />
							<Route path='advanced-order' element={<AdvancedOrder />} />
							<Route path='social' element={<Social />} />
							<Route path='pantry' element={<Pantry />} />
							<Route path='account' element={<AccountPage />} />
							<Route path='profile' element={<Profile />} />
							<Route path='easy-order-pantry' element={<EasyOrderPantry />} />
							<Route path='advanced-order-pantry' element={<AdvancedOrderPantry />} />
						</Route>
					</Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
