import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const Planets = () => {
  const { theotherid } = useParams();
  const [detail, setDetail] = useState(null);
  const { store, actions } = useContext(Context);

  const findPlanets = () => {
    const planet = store.planets.find((item) => item._id == theotherid);
    setDetail(planet);
  };

  useEffect(() => {
    findPlanets();
  }, [theotherid, store.planets]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 cardInfo">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${detail?.uid}.jpg`}
            alt="{detail?.properties?.name}"
            className="card-img-top character-img"
            onError={(e) => {
              e.target.src = "https://picsum.photos/200/200";
            }}
          />
        </div>
        <div className="col-6 text-center align-self-center">
          <h1>{detail?.properties?.name}</h1>
          <h4>{detail?.description}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            laudantium delectus quasi iusto dolores aut quae iste rerum quaerat?
            Iste obcaecati nisi labore quas animi ipsam atque voluptas facilis!
            Nesciunt et reprehenderit provident ex blanditiis at explicabo
            autem, architecto vel, molestias ea, aut consequatur dolorum ipsam
            tempora exercitationem eveniet facere?
          </p>
        </div>
      </div>
      <hr className="border border-danger border-2 opacity-50" />
      <div className="row text-center">
        <div className="col-2">
          <div>Name:</div>
          <div>{detail?.properties?.name}</div>
        </div>

        <div className="col-2">
          <div>Diameter:</div>
          <div>{detail?.properties?.diameter}</div>
        </div>

        <div className="col-2">
          <div>Population:</div>
          <div>{detail?.properties?.population}</div>
        </div>

        <div className="col-2">
          <div>Terrain:</div>
          <div>{detail?.properties?.terrain}</div>
        </div>

        <div className="col-2">
          <div>Orbital Period:</div>
          <div>{detail?.properties?.orbital_period}</div>
        </div>

        <div className="col-2">
          <div>Rotation Period:</div>
          <div>{detail?.properties?.rotation_period}</div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
