import React, { useState } from "react";
import { useData } from "./DataMovie";

export default function Movie(props) {
  const { movies, setMovies } = useData();

  const [newMovie, setnewMovie] = useState({
    name: props.name,
  });

  const copy = movies.slice();
  const updateRating = (e) => {
    const rating = e.target.value;
    const index = props.index;
    copy[index].rating.push(Number(rating));

    const element = copy[index];

    const reducer = (acamulator, corrrentValue) => acamulator + corrrentValue;

    element.avg = element.rating.reduce(reducer) / element.rating.length;

    setMovies(copy);

    sendDisplay();
  };

  const sendDisplay = () => {
    props.sendDisplay(newMovie.name);
  };

  return (
    <div>
      <div className="col mb-4 ">
        <div className="card movie_card">
          <div className="videoWrapper">
            <iframe
              width={755}
              height={506}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={props.img}
              classname="card-img-top"
              alt="..."
            ></iframe>
          </div>
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text">{props.discription}</p>
            <br />
            <h6>Director: &nbsp; {props.director}</h6>
            <h6>Writers: &nbsp; {props.writers}</h6>
            <h6>Stars: &nbsp; {props.stars}</h6>
            <br />

            <h6>
              Average Rating:&nbsp; {props.avg.toFixed(1)}{" "}
              <i class="fas fa-star"></i>
            </h6>
          </div>
          <div>
            <button
              className="btn btn-warning btn-lg"
              value="1"
              onClick={updateRating}
            >
              1
            </button>

            <button
              value="2"
              className="btn btn-warning btn-lg"
              onClick={updateRating}
            >
              2
            </button>

            <button
              value="3"
              onClick={updateRating}
              className="btn btn-warning btn-lg"
            >
              3
            </button>
            <button
              onClick={updateRating}
              value="4"
              className="btn btn-warning btn-lg"
            >
              4
            </button>
            <button
              value="5"
              onClick={updateRating}
              className="btn btn-warning btn-lg"
            >
              5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
