import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-anaranjado.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3 bg-transparent">
			<Link to="/">
				<span className="starwarss navbar-brand mb-0 h1">
					<img src={starwars} width="80" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button
						className="btn dropdown-toggle btnNav"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						FAVOURITE <span>{store.favourites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
						{store.favourites.map((item, index) => {
							return (
								<li key={`${index}`}>
									<div>
										<span className="dropdown-item">
											<Link to={"/personProfile/" + actions.findIndexInCharacter(item.name)}>
												{item.name}
											</Link>
										</span>
										<span
											className="dropdown-item"
											onClick={() => actions.delToFavorites(item.name)}>
											<i className="fa fa-trash float-right" aria-hidden="true" />
										</span>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
