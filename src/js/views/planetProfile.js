import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import PropTypes, { object } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import planeta from "../../img/planeta.jpg";

export const PlanetProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const styles = {
		maxwidth: "540px"
	};
	console.log(store.planetsDetails);
	useEffect(() => {
		actions.loadPlanetsDetails(store.planetas[params.uid].url);
	}, []);

	return (
		<div>
			<div className="card p-0 col-8 m-auto" style={styles}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={planeta} className="card-img-top img-fluid" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title text-white">{store.planetsDetails.name}</h5>
							<p className="card-text text-white">Diameter: {store.planetsDetails.diameter}</p>
							<p className="card-text text-white">
								Rotation Period {store.planetsDetails.rotation_period}
							</p>
							<p className="card-text text-white">
								Orbital Period: {store.planetsDetails.orbital_period}
							</p>
							<p className="card-text text-white">Gravity: {store.planetsDetails.gravity}</p>
							<p className="card-text text-white">Population: {store.planetsDetails.population}</p>
							<p className="card-text text-white">Climate: {store.planetsDetails.climate}</p>
							<p className="card-text text-white">Terrain {store.planetsDetails.terrain}</p>
							<p className="card-text text-white">Surface Water: {store.planetsDetails.surface_water}</p>
							<p className="card-text text-white">Created: {store.planetsDetails.created}</p>
							<p className="card-text text-white">Edited: {store.planetsDetails.edited}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
