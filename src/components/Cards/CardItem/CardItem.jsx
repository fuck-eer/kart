import React from "react";
import { useDispatch } from "react-redux";
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
} from "reactstrap";
import { cartActions } from "../../../store/cartSlice";
import { addInCart } from "../../../store/actions/asyncCartAction";
import classes from "./CardItem.module.scss";
const CardItem = ({ details }) => {
	const dispatch = useDispatch();
	const addToCartHandler = () => {
		dispatch(addInCart(details));
	};
	return (
		<Card className={classes.card} color='warning' outline>
			<CardBody>
				<CardTitle tag='h5'>{details.name}</CardTitle>
				<CardSubtitle className='mb-2 text' tag='p'>
					{details.description}
				</CardSubtitle>
				<CardText>${details.price}</CardText>
				<Button onClick={addToCartHandler} size='sm' color='warning'>
					Add to Cart
				</Button>
			</CardBody>
			<div className={classes.imgg}>
				<img src={details.imageUrl} alt='unable to load' />
			</div>
		</Card>
	);
};

export default CardItem;
