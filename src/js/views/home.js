import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <h1 className="text-danger">Characters</h1>
      <div className="carousel border border-dark-subtle">
        {store.people.map((item)=> {
            return (
                <div className="my-card mx-2" key={item._id}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="{item.properties.name}" className="card-img-top" />
                    <div className="card-body">
                    <h5 className="card-title">{item.properties.name}</h5>
                    <p className="card-text">Gender: {item.properties.gender}</p>
                    <p className="card-text">Hair color: {item.properties.hair_color}</p>
                    <p className="card-text">Eye color: {item.properties.eye_color}</p>
                    <div className="d-flex justify-content-between">
                    <Link to={`/people/${item._id}`} className="btn btn-outline-primary">Learn more!</Link>
                    <button  className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></button>
                    </div>

                </div>
                </div>

            )
        })}
      </div>
    </div>
  );
};
