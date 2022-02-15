import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Badge, Collapse, Nav, Navbar, NavbarToggler } from "reactstrap";

const MainHeader = () => {
	const { numberOfItems } = useSelector((state) => state.cartSlice);
	return (
		<div>
			<Navbar color='dark' dark expand='xl' fixed='top'
			>
				<NavLink
					to='/'
					style={{
						all: "unset",
						fontSize: "26px",
						color: "aliceblue",
						cursor: "pointer",
						fontWeight: "100",
					}}
				>
					LoadKart
				</NavLink>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav className='me-auto' navbar></Nav>
					<NavLink
						style={{ all: "unset", cursor: "pointer", color: "#fff" }}
						to='/cart'
					>
						Cart <Badge color='warning'>{numberOfItems}</Badge>{" "}
					</NavLink>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MainHeader;
