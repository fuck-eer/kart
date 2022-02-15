import React from "react";
import CartItems from "../components/CartItems/CartItems";
import FullPage from "../Layout/FullPage";

const CartPage = () => {
	return (
		<FullPage header='Cart'>
			<CartItems />
		</FullPage>
	);
};

export default CartPage;
