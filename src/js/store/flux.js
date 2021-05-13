const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			favourites: [],
			characterDetails: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ personajes: data.results }))
					.catch(error => console.log(error));

				fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planetas: data.results }))
					.catch(error => console.log(error));
			},
			loadCharacterDetails: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ characterDetails: data.result.properties }))
					.catch(error => console.log(error));
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addfavourites: (index, name) => {
				const store = getStore();
				const filter = store.favourites.filter(item => item.name === name);
				if (filter.length === 0) {
					let newfavouritesItem = {
						uid: index,
						name: name
					};
					const newfavouritesItemList = [...store.favourites, newfavouritesItem];
					setStore({ favourites: newfavouritesItemList });
				}
			},
			delTofavourites: name => {
				const store = getStore();
				const filter = store.favourites.filter(item => item.name === name);
				setStore({ favourites: filter });
			}
		}
	};
};

export default getState;
