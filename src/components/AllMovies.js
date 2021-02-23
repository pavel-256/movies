import React, { useEffect, useState } from "react";
import { useData } from "./DataMovie";
import { Link, Route, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Movie from "./Movie";

function AllMovies(props) {
  const history = useHistory();
  const { movies, setMovies } = useData();

  const [newMovie, setnewMovie] = useState({
    display: false,
    resetSelect: false,
  });

  const sort = () => {
    for (let n = 0; n < movies.length; n++) {
      for (let i = 0; i < movies.length - 1 - n; i++) {
        if (movies[i].avg > movies[i + 1].avg) {
          const swap = movies[i];
          movies[i] = movies[i + 1];
          movies[i + 1] = swap;
        }
      }
    }

    return movies.reverse();
  };
  sort();

  const handelChange = (e) => {
    setnewMovie({ display: true, resetSelect: true });

    history.push(`/${e.target.value}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sendDisplay = (display) => {
    history.push(`/${display}`);
    setnewMovie({ display: true });
  };


  return (
    <div>
      <header id="top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <div className="movie_icon">
              {" "}
              <i class="fas fa-video mr-2 fa-2x "></i>
              <span id="main_icon">MovieRatings</span>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link text-white " href=""></a>
                </li>
                <li className="nav-item mr-auto">
                  <select
                    value={newMovie.resetSelect === true ? "Movies" : "Movies"}
                    onChange={handelChange}
                    name="name"
                    className="custom-select mr-sm-2 "
                  >
                    <option selected="true" disabled="disabled">
                      Movies
                    </option>
                    {movies.map((item, index) => {
                      return <option>{item.name}</option>;
                    })}
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <min className="min-h620 main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 movie col-md-12 col-sm-12 mb-3">
              {movies.map((item, index) => {
                return index < 1 && newMovie.display === false ? (
                  <Route
                    exact
                    path={`/`}
                    component={() => (
                      <Movie
                        name={item.name}
                        discription={item.discription}
                        rating={item.rating}
                        index={index}
                        img={item.img}
                        avg={item.avg}
                        director={item.director}
                        writers={item.writers}
                        stars={item.stars}
                        sendDisplay={sendDisplay}
                      />
                    )}
                  />
                ) : (
                  <Route
                    exact
                    path={`/${item.name}`}
                    component={() => (
                      <Movie
                        name={item.name}
                        discription={item.discription}
                        rating={item.rating}
                        index={index}
                        img={item.img}
                        avg={item.avg}
                        director={item.director}
                        writers={item.writers}
                        stars={item.stars}
                        sendDisplay={sendDisplay}
                      />
                    )}
                  />
                );
              })}
            </div>
            <div className="col-lg-5 movies col-md-12 col-sm-12  ">
              <h1 className="best">Best 3 Movies</h1>

              {movies.map((item, index) => {
                return index < 3 ? (
                  <div className="card mb-5 movie_card best_square">
                    <div className="row no-gutters ">
                      <div className="col-lg-6 bestMoviWrapper   ">
                        <img src={item.img2} className="img-best" alt="..." ></img>
                      </div>
                      <div className="col-lg-5 m-auto ">
                        <div className="card-body">
                          <button
                            onClick={handelChange}
                            value={item.name}
                            className="card-title btn btn-warning btn-lg best-btn"
                          >
                            {item.name}
                          </button>
                          <p className="mt-4">
                            Rating: {item.avg.toFixed(1)}
                            <i class="fas fa-star"> </i>
                          </p>
                          <p className="card-text">
                            <small className="text-muted"></small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : // <div key={index + item.id * 63.7}>
                //     <button value={item.name} onClick={handelChange}>{item.name}</button>
                //     <div>{item.avg.toFixed(1)}</div>
                //     <div>{item.discription}</div>
                // </div>
                null;
              })}
            </div>
          </div>
        </div>
      </min>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center pt-2 ">
                MovieRatings © 2021
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default withRouter(AllMovies);
