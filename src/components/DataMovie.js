import React, { useContext, useState } from "react";

import avatar from "../img/avatar.jpg";
import batman from "../img/batman.jpg";
import leon from "../img/leon.jpg";
import madmax from "../img/madmax.jpg";
import rambo2 from "../img/rambo2.jpg";
import riddic from "../img/riddic.jpg";
import robocop2 from "../img/robocop2.jpg";
import spiderman3 from "../img/spiderman3.jpg";
import terminator2 from "../img/terminator2.jpeg";
import matrix from "../img/matrix.jpg";

const Context = React.createContext();

export const useData = () => {
  return useContext(Context);
};

export const DataMovie = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Avatar",
      id: 1,
      discription:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      rating: [],
      img: "https://www.youtube.com/embed/6ziBFh3V1aM",
      avg: 5,
      img2: avatar,
      avg: 5,
    },
    {
      name: "The Matrix",
      id: 2,
      discription:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      rating: [],
      img: "https://www.youtube.com/embed/EweuTOz7g-g",
      img2: matrix,
      avg: 4,
    },
    {
      name: "The Dark Knight",
      id: 3,
      discription:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: [],
      img: "https://www.youtube.com/embed/EXeTwQWrcwY",
      img2: batman,
      avg: 3,
    },
    {
      name: "Spiderman 3",
      id: 4,
      discription:
        "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
      rating: [],
      img: "https://www.youtube.com/embed/zjdtiQx7RIw",
      img2: spiderman3,
      avg: 2,
    },
    {
      name: "Leon",
      id: 5,
      discription:
        "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
      rating: [],
      img: "https://www.youtube.com/embed/rNw0D7Hh0DY",
      img2: leon,
      avg: 1,
    },
    {
      name: "Mad Max",
      id: 6,
      discription:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      rating: [],
      img: "https://www.youtube.com/embed/YWNWi-ZWL3c",
      avg: 1,
    },
    {
      name: "Rambo 2",
      id: 7,
      discription:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      rating: [],
      img: "https://www.youtube.com/embed/IQt9bDOGTgg",
      img2: rambo2,
      avg: 1,
    },
    {
      name: "Riddic",
      id: 7,
      discription: "EE",
      rating: [],
      img: "https://www.youtube.com/embed/iP3eFIOBU0k",
      img2: riddic,
      avg: 1,
    },
    {
      name: "Robocop 2",
      id: 7,
      discription:
        "Robocop is back to fight a new seed of crime and a more dangerous and violent robot version of himself.",
      rating: [],
      img: "https://www.youtube.com/embed/HNcy89RqF5Q",
      img2: robocop2,
      avg: 1,
    },
    {
      name: "Terminator 2",
      id: 7,
      discription:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
      rating: [],
      img: "https://www.youtube.com/embed/CRRlbK5w8AE",
      img2: terminator2,
      avg: 1,
    },
  ]);

  return (
    <div className="App">
      <Context.Provider
        value={{
          movies,
          setMovies,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
