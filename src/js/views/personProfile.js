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
	console.log(store.characterDetails);

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
							<h5 className="card-title">Name:</h5>
							<p className="card-text">Height:</p>
							<p className="card-text">Mass:</p>
							<p className="card-text">Hair Color:</p>
							<p className="card-text">Skin Color:</p>
							<p className="card-text">Eye Color:</p>
							<p className="card-text">Birth Year:</p>
							<p className="card-text">Created:</p>
							<p className="card-text">Edited:</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonProfile;
