import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colotlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import { OpenRoutes } from "./routing/OpenRoutes";
import { PrivateRoutes } from "./routing/PrivateRoutes";
function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<OpenRoutes>
							<Login />
						</OpenRoutes>
					}
				/>
				<Route
					path='/admin'
					element={
						<PrivateRoutes>
							<MainLayout />
						</PrivateRoutes>
					}
				>
					<Route path='customers' element={<Customers />} />
					<Route path='list-color' element={<Colorlist />} />
					<Route path='color' element={<Addcolor />} />
					<Route path='color/:id' element={<Addcolor />} />
					<Route path='list-category' element={<Categorylist />} />
					<Route path='category' element={<Addcat />} />
					<Route path='category/:id' element={<Addcat />} />
					<Route path='list-brand' element={<Brandlist />} />
					<Route path='brand' element={<Addbrand />} />
					<Route path='brand/:id' element={<Addbrand />} />
					<Route path='list-product' element={<Productlist />} />
					<Route path='product' element={<Addproduct />} />
					<Route path='product/:id' element={<Addproduct />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
