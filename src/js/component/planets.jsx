import React from "react";
import planeta from "../../img/planeta.jpg";
import PropTypes from "prop-types";

const Planets = props => {
	const styles = {
		maxwidth: "18rem"
	};

	return (
		<div className="col-lg-3 col-md-12 mx-auto">
			<div className="card card-block" style={styles}>
				<div className="card-header">
					<img src={planeta} className="card-img-top img-fluid" alt="Imagen" />
				</div>
				<div className="card-body">
					<h5 className="card-title text-white">{props.name}</h5>
					<p className="card-text text-white">Population</p>
					<p className="card-text text-white">Terrain</p>
				</div>
				<div className="card-footer">
					<a href={props.url} className="btn btn-danger">
						Learn more!
					</a>
					<a href="#" className="btn btn-danger">
						<i className="fas fa-heart text-white" />
					</a>
				</div>
			</div>
		</div>
	);
};
Planets.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};

export default Planets;
