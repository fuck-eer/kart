import { getAllProducts } from "../../service";
import { productActions } from "../productSlice";

export const getallProducts = () => {
	return (dispatch) => {
		getAllProducts()
			.then((e) => {
				const products = [];
				for (let key in e.data) {
					e.data[key] = { ...e.data[key], id: key };
					products.push(e.data[key]);
				}
				//dispatch
				dispatch(productActions.setProducts({ products }));
			})
			.catch((err) => {
				alert(err);
			});
	};
};
