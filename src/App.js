import MainHeader from "./components/MainHeaader/MainHeader";
import classes from "./App.module.scss";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {} from "./service";
import { getallProducts } from "./store/actions/asyncProductActions";
import { getCart } from "./store/actions/asyncCartAction";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getallProducts());
		dispatch(getCart());
	}, [dispatch]);
	return (
		<div className={classes.App}>
			<MainHeader />
			<Switch>
				<Route path='/cart' exact>
					<CartPage />
				</Route>
				<Route path='/'>
					<Homepage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
