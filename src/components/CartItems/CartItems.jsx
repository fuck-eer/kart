import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { clearCArt } from "../../store/actions/asyncCartAction";
import { cartActions } from "../../store/cartSlice";
import { productActions } from "../../store/productSlice";
import CartItem from "./CartItem/CartItem";
import classes from "./CartItems.module.scss";
const CartItems = () => {
	const { cartItems, numberOfItems, totalPrice } = useSelector(
		(state) => state.cartSlice
	);
	const dispatch = useDispatch();
	const clearCartHandler = () => {
		dispatch(clearCArt());
	};
	let crtitms = (
		<tr>
			<td colSpan='12'>
				<p
					style={{
						textAlign: "center",
						fontSize: "20px",
						backgroundColor: "#777",
						color: "#000",
						fontWeight: 700,
						padding: "10px",
						marginBottom: "0",
						width: "100%",
					}}
				>
					Nothing in the Cart
				</p>
			</td>
		</tr>
	);
	if (cartItems.length > 0) {
		crtitms = cartItems.map((e) => <CartItem key={e.id} details={{ ...e }} />);
	}
	return (
		<div className={classes.CartItems}>
			<Table borderless size='xl' hover responsive striped>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{crtitms}</tbody>
			</Table>
			<div className={classes.footer}>
				<div className={classes.footer_dic}>Checkout</div>
				<div className={classes.footer_di}></div>
				<div className={classes.footer_din}>x{numberOfItems}</div>
				<div className={classes.footer_din}>${totalPrice}</div>
				<div className={classes.footer_dik}>
					<Button
						disabled={numberOfItems === 0 ? true : false}
						onClick={clearCartHandler}
						size='sm'
						color='dark'
					>
						Clear Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartItems;
