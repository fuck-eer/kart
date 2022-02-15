import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem/CardItem";

import classes from "./Cards.module.scss";
const Cards = () => {
	const { products } = useSelector((state) => state.productSlice);

	let prods = <p>Wait...</p>;
	if (products.length > 0) {
		prods = products.map((e) => <CardItem key={e.id} details={{ ...e }} />);
	}

	return <div className={classes.CardHolder}>{prods}</div>;
};

export default Cards;
