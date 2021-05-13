import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import PropTypes, { object } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import personaje from "../../img/personajes.jpg";

const PersonProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const styles = {
		maxwidth: "540px"
	};
	//console.log(store.characterDetails.gender);

	useEffect(() => {
		actions.loadCharacterDetails("https://www.swapi.tech/api/people/" + params.uid);
	}, []);

	return (
		<div>
			<div className="card p-0 col-8 m-auto" style={styles}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={personaje} className="card-img-top img-fluid" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title text-white">{store.characterDetails.name}</h5>
							{Object.entries(store.characterDetails).map(([key, value], i) => {
								return (
									<p key={i} className="card-text text-white">
										{key.toUpperCase()}:{value}
									</p>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonProfile;
