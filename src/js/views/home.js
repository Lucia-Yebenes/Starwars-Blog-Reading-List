import React, { useContext } from "react";
import starwars from "../../img/star-wars.png";
import "../../styles/home.scss";
import { Character } from "../component/character.jsx";
import { Planets } from "../component/planets.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="mx-3">
				<h1>CHARACTER</h1>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
					{store.personajes.map((item, i) => {
						return <Character key={i} name={item.name} uid={item.uid} type="C" />;
					})}
				</div>
			</div>
			<div className="mx-3">
				<h1>PLANETS</h1>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
					{store.planetas.map((item, i) => {
						return <Planets key={i} name={item.name} uid={item.uid} type="P" />;
					})}
				</div>
			</div>
		</div>
	);
};
