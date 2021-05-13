import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import personaje from "../../img/personajes.jpg";

const PersonProfile = () => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "540px"
	};
	return (
		<div>
			<div className="card p-0 col-8 m-auto" style={styles}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={personaje} className="card-img-top img-fluid" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonProfile;
