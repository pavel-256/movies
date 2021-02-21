import React, { useEffect, useState } from "react";
import { useData } from "./DataMovie";
import { Link, Route, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Movie from "./Movie";

function AllMovies(props) {
  const history = useHistory();
  const { movies } = useData();

  const [newMovie, setnewMovie] = useState({
    display: false,
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
    console.log(e.target.value);

    setnewMovie({ display: true });

    history.push(`/${e.target.value}`);
  };

  return (
    <div>
      <header>
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
      <main className="min-h620 main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 movie col-md-12 col-sm-12">
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
                  <div
                    className="card mb-3 movie_card "
                    style={{ maxWidth: "600px" }}
                  >
                    <div className="row no-gutters ">
                      <div className="col-lg-6 bestMoviWrapper ">
                        <img src={item.img2} className="img-best" alt="..." />
                      </div>
                      <div className="col-lg-6 col">
                        <div className="card-body">
                          <button
                            onClick={handelChange}
                            value={item.name}
                            className="card-title btn btn-warning btn-lg "
                          >
                            {item.name}
                          </button>
                          <p className="mt-4">
                            Rating: {item.avg} <i class="fas fa-star"> </i>
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
      </main>
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

<iframe
  width="900"
  height="506"
  src="https://www.youtube.com/embed/m8e-FF8MsqU"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
