import { addincart, clearCart, delfromcart, getCartItems } from "../../service";
import { cartActions } from "../cartSlice";

export const getCart = () => {
	return (dispatch) => {
		getCartItems()
			.then((e) => {
				const items = e.data;
				dispatch(cartActions.getCart({ items }));
			})
			.catch((err) => {
				alert(err);
			});
	};
};

export const addInCart = (product) => {
	return (dispatch) => {
		addincart(product).then((e) => {
			dispatch(cartActions.addToCart({ product }));
		});
	};
};

export const delFromCArt = (id) => {
	return (dispatch) => {
		delfromcart(id)
			.then((e) => {
				dispatch(cartActions.removeFromCart({ id }));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const clearCArt = () => {
	return (dispatch) => {
		clearCart()
			.then((e) => {
				dispatch(cartActions.clearCart());
			})
			.catch((err) => {
				alert(err);
			});
	};
};
