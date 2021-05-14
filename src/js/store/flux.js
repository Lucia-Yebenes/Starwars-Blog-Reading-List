const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favourites: [],
			characterDetails: {},
			planetsDetails: {}
		},
		actions: {
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
				console.log(url);
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ characterDetails: data.result.properties }))
					.catch(error => console.log(error));
			},
			loadPlanetsDetails: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planetsDetails: data.result.properties }))
					.catch(error => console.log(error));
			},
			addfavourites: (index, name, type) => {
				const store = getStore();
				const filter = store.favourites.filter(item => item.name === name && item.type === type);
				if (filter.length === 0) {
					let newfavouritesItem = {
						uid: index,
						name: name,
						type: type
					};
					const newfavouritesItemList = [...store.favourites, newfavouritesItem];
					setStore({ favourites: newfavouritesItemList });
				}
			},
			delTofavourites: name => {
				const store = getStore();
				const filter = store.favourites.filter(item => item.name !== name);
				setStore({ favourites: filter });
			},
			findIndexInCharacter: name => {
				const store = getStore();
				var result = -1;
				store.personajes.some(function(item, i) {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				return result;
			},
			findIndexInPlanets: name => {
				const store = getStore();
				var result = -1;
				store.planetas.some(function(item, i) {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				return result;
			}
		}
	};
};

export default getState;
