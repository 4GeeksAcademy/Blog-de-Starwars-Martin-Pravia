import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <div className="ms-auto">
          <div className="dropdown">
            <a
              className="btn btn-primary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
            </a>

			<ul className="dropdown-menu">
              {store.favorites.length > 0 ? (
                store.favorites.map((item) => (
                  <li key={item._id} className="d-flex justify-content-between align-items-center px-2">
                    <Link className="dropdown-item me-2" to={`/people/${item._id}`}>
                      {item.properties.name}
                    </Link>
                    <i 
                      className="fa-regular fa-trash text-danger" 
                      style={{ cursor: "pointer" }}
                      onClick={() => actions.addFavorites(item)} 
                    ></i>
                  </li>
                ))
              ) : (
                <li className="dropdown-item">No tiene favoritos</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
