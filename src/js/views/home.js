import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div>
        <h1 className="text-danger">Characters</h1>
        <div className="carousel border border-dark-subtle">
          {store.people.map((item) => {
            return (
              <div className="my-card mx-2" key={item._id}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="{item.properties.name}"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.properties.name}</h5>
                  <p className="card-text">Gender: {item.properties.gender}</p>
                  <p className="card-text">
                    Hair color: {item.properties.hair_color}
                  </p>
                  <p className="card-text">
                    Eye color: {item.properties.eye_color}
                  </p>
                  <div className="d-flex justify-content-between mt-1">
                    <Link
                      to={`/people/${item._id}`}
                      className="btn btn-outline-primary"
                    >
                      Learn more!
                    </Link>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => actions.addFavorites(item)}
                    >
                      <i
                        className={`fa-heart ${
                          store.favorites.some((fav) => fav._id === item._id)
                            ? "fa-solid text-danger"
                            : "fa-regular text-warning"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-danger mt-3">Planets</h2>
      

        <div className="carousel border border-dark-subtle">
  {store.planets.map((pla, index) => {  
    return (
      <div className="my-card mx-2" key={pla._id + index}> 
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${pla.uid}.jpg`}
          alt={pla.properties.name}
          className="card-img-top"
          onError={(e) => {
            e.target.src = "https://picsum.photos/200/200" 
         
          
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{pla.properties.name}</h5>
          <p className="card-text">Population: {pla.properties.population}</p>
          <p className="card-text">Terrain: {pla.properties.terrain}</p>

          <div className="d-flex justify-content-between mt-auto">
            <Link
              to={`/planets/${pla._id}`}  
              className="btn btn-outline-primary"
            >
              Learn more!
            </Link>
            <button
              className="btn btn-outline-secondary"
              onClick={() => actions.addFavorites(pla)}
            >
              <i
                className={`fa-heart ${
                  store.favorites.some((fav) => fav._id === pla._id)
                    ? "fa-solid text-danger"
                    : "fa-regular text-warning"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
};
