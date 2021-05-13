import React, { useContext } from "react";
import { Link } from "react-router-dom";
import personaje from "../../img/personajes.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
//import personProfile from "../views/personProfile";
const Character = props => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};
	console.log(props.uid);
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
					<Link to={"/personProfile/" + props.uid} className="btn btn-danger">
						<span>Learn more!</span>
					</Link>
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
	uid: PropTypes.string,
	key: PropTypes.number
};
export default Character;
