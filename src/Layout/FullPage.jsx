import React from "react";
import classes from "./FullPage.module.scss";
const FullPage = ({ header, children }) => {
	return (
		<div className={classes.Fullpage}>
			<div className={classes.Fullpage_Header}>
				<h1>{header}</h1>
			</div>

			{children}
		</div>
	);
};

export default FullPage;
