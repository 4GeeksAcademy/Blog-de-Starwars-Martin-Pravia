import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const People = () => {
  const { theid } = useParams();
  const [detail, setDetail] = useState(null);
  const { store, actions } = useContext(Context);

  const findPeople = () => {
    const person = store.people.find((item) => item._id == theid);
    setDetail(person);
  };

  useEffect(() => {
    findPeople();
  }, [theid, store.people]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 cardInfo">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${detail?.uid}.jpg`}
            alt="{detail?.properties?.name}"
            className="card-img-top character-img"
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
          <div>Birth Year:</div>
          <div>{detail?.properties?.birth_year}</div>
        </div>

        <div className="col-2">
          <div>Gender:</div>
          <div>{detail?.properties?.gender}</div>
        </div>

        <div className="col-2">
          <div>Height:</div>
          <div>{detail?.properties?.height}</div>
        </div>

        <div className="col-2">
          <div>Skin Color:</div>
          <div>{detail?.properties?.skin_color}</div>
        </div>

        <div className="col-2">
          <div>Eye Color:</div>
          <div>{detail?.properties?.eye_color}</div>
        </div>
      </div>
    </div>
  );
};

export default People;
