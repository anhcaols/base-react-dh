import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./pages/products/product-detail";
import ProductsPage from "./pages/products";
import ProfilePage from "./pages/profile";
import NotificationsPage from "./pages/notifications";
// import HomePage from "@src/pages/home";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home";

function App() {
	return (
		<Routes>
			<Route path={''} element={<MainLayout/>}>
				<Route path={'/'} element={<HomePage/>}/>
				<Route path={'/notifications'} element={<NotificationsPage/>}/>
				<Route path={'/profile'} element={<ProfilePage/>}/>
				<Route path={'/products'} element={<ProductsPage/>}/>
				<Route path={"/products/:productId"} element={<ProductDetailPage/>}/>
			</Route>
		</Routes>
	);
}

export default App;
