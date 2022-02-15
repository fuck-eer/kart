import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { delFromCArt } from "../../../store/actions/asyncCartAction";
// import classes from "./CartItem.module.scss";
const CartItem = ({ details }) => {
	const dispatch = useDispatch();
	const onDeleteHandler = () => {
		dispatch(delFromCArt(details.id));
	};

	return (
		<tr>
			<th scope='row'>{details.name}</th>
			<td>${details.price}</td>
			<td>x{details.quantity}</td>
			<td>${parseInt(details.price) * +details.quantity}</td>
			<td>
				<Button onClick={onDeleteHandler} size='sm' color='danger'>
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default CartItem;
