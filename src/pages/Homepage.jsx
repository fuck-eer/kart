import React from "react";
import Cards from "../components/Cards/Cards";
import FullPage from "../Layout/FullPage";

const Homepage = () => {
	return (
		<FullPage header='Products'>
			<Cards />
		</FullPage>
	);
};

export default Homepage;
