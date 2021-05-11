import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-anaranjado.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 bg-transparent">
			<Link to="/">
				<span className="starwarss navbar-brand mb-0 h1">
					<img src={starwars} width="80" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btnNav btn btn-primary bg-transparent border-0">FAVOURITE 0</button>
				</Link>
			</div>
		</nav>
	);
};
