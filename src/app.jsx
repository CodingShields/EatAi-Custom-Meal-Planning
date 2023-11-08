import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MainPage
import HomeLayout from "./Layouts/Home-Layout.jsx";
import Support from "./Pages/Support.jsx";
import About from "./Pages/About.jsx";
import Pantry from "./Pages/Pantry.jsx";
// Sub Pages
import DashBoardLayout from "./Layouts/Dash-Board-Layout.jsx";
import Welcome from "./Pages/SubPage/Welcome.jsx";
import ChefSurprise from "./Pages/SubPage/Chef-Surprise.jsx";
import EasyOrder from "./Pages/SubPage/Easy-Order.jsx";
import AdvancedOrder from "./Pages/SubPage/Advanced-Order.jsx";
// Account Pages
import AccountNavBar from "./Layouts/Account-Nav-Bar.jsx";
import AccountHome from "./Pages/SubPage/Account-Comps/Account-Home.jsx";
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
					<Route path='/' element={<HomeLayout />}>
						<Route index element={<SignIn />} />
						<Route path='About' element={<About />} />
						<Route path='Support' element={<Support />} />
						<Route path='SignUp' element={<SignUp />} />
						<Route element={<ProtectedRoute />}>
							<Route path='MembersArea' element={<DashBoardLayout />}>
								<Route path='Welcome' element={<Welcome />} />
								<Route path='ChefSurprise' element={<ChefSurprise />} />
								<Route path='EasyOrder' element={<EasyOrder />} />
								<Route path='AdvancedOrder' element={<AdvancedOrder />} />
								<Route path='Pantry' element={<Pantry />} />
								<Route path='AccountHome' element={<AccountNavBar />}>
									<Route index element={<AccountHome />} />
									<Route path='Profile' element={<Profile />} />
									<Route path='EasyOrderPantry' element={<EasyOrderPantry />} />
									<Route path='AdvancedOrderPantry' element={<AdvancedOrderPantry />} />
								</Route>
							</Route>
						</Route>
					</Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
