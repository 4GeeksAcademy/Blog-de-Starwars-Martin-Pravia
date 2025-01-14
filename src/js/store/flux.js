const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBaseStarWars: "https://www.swapi.tech/api",
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      favorites: [],
    },
    actions: {
      getAllPeople: async () => {
        const store = getStore();
        if (store.people <= 0) {
          try {
            const response = await fetch(`${store.urlBaseStarWars}/people`);
            const data = await response.json();
            console.log(data);
            console.log(data.results);
            for (let person of data.results) {
              console.log(person);
              const responsePerson = await fetch(person.url);
              const dataPerson = await responsePerson.json();
              console.log(dataPerson);
              setStore({
                people: [...store.people, dataPerson.result],
              });
              localStorage.setItem("people", JSON.stringify(store.people));
            }
          } catch (error) {
            console.log(error);
          }
        }
      },

      getAllPlanets: async () => {
        console.log("Ejecutando getAllPlanets");
        const store = getStore();
        try {
          const response = await fetch(`${store.urlBaseStarWars}/planets`);
          const data = await response.json();
          console.log("Data recibida", data);
          console.log(data.results);
          for (let planet of data.results) {
            console.log(planet);
            const responsePlanet = await fetch(planet.url);
            const dataPlanet = await responsePlanet.json();
            console.log(dataPlanet);
            setStore({
              planets: [...store.planets, dataPlanet.result],
            });
            localStorage.setItem("planets", JSON.stringify(store.planets));
          }
        } catch (error) {
          console.log(error);
        }
      },

      addFavorites: (favorite) => {
        const store = getStore();
        const exist = store.favorites.some((item) => item._id == favorite._id);
        if (exist) {
          console.log("Ya existe el favorito");
          // alert("Ya existe el favorito")
          const newFavorite = store.favorites.filter(
            (item) => item._id != favorite._id
          );
          setStore({
            favorites: newFavorite,
          });
          alert("Favorito Eliminado");
        } else {
          console.log("Favorito agregado");
          alert("Favorito agregado");
          setStore({
            favorites: [...store.favorites, favorite],
          });
        }
      },
    },
  };
};

export default getState;
