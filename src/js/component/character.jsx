import React, { useContext } from "react";
import personaje from "../../img/personajes.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
const Character = props => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};

	return (
		<div className="col-lg-3 col-md-12 mx-auto">
			<div className="card card-block" style={styles}>
				<div className="card-header">
					<img src={personaje} className="card-img-top img-fluid" alt="Imagen" />
				</div>
				<div className="card-body">
					<h5 className="card-title text-white">{props.name}</h5>
					<p className="card-text text-white">Population</p>
					<p className="card-text text-white">Terrain</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-danger">
						Learn more!
					</a>
					<a href="#" className="btn btn-danger">
						<i
							onClick={() => actions.addfavourites(props.key, props.name)}
							className="fas fa-heart text-white"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
Character.propTypes = {
	name: PropTypes.string,
	buttonUrl: PropTypes.string,
	key: PropTypes.number
};
export default Character;
