import React, { useContext, useState } from "react";

import avatar from "../img/avatar.jpg";
import batman from "../img/batman.jpg";
import leon from "../img/leon.jpg";
import madmax from "../img/madmax.jpg";
import rambo2 from "../img/rambo2.jpg";
import riddic from "../img/riddic.jpg";
import robocop2 from "../img/robocop2.jpg";
import spiderman3 from "../img/spiderman3.jpg";
import ghost from "../img/ghost.jpg";
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
      discription:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      rating: [5, 5, 5, 4],
      img: "https://www.youtube.com/embed/6ziBFh3V1aM",
      avg: 5,
      img2: avatar,
      avg: 4.7,
      director: "James Cameron",
      writers: "James Cameron",
      stars: "Sam Worthington, Zoe Saldana, Sigourney Weaver ",
    },
    {
      name: "The Matrix",
      discription:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      rating: [4, 3, 5, 5],
      img: "https://www.youtube.com/embed/EweuTOz7g-g",
      img2: matrix,
      avg: 4.2,
      director: "Lilly Wachowski,  Lana Wachowski",
      writers: "Lilly Wachowski,  Lana Wachowski",
      stars: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss ",
    },
    {
      name: "The Dark Knight",
      discription:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: [3, 3, 5, 1],
      img: "https://www.youtube.com/embed/EXeTwQWrcwY",
      img2: batman,
      avg: 3.0,
      director: "Christopher Nolan",
      writers: "Jonathan Nolan, Christopher Nolan",
      stars: "Christian Bale, Heath Ledger, Aaron Eckhart",
    },
    {
      name: "Spiderman 3",
      discription:
        "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
      rating: [1, 3, 2, 2],
      img: "https://www.youtube.com/embed/zjdtiQx7RIw",
      img2: spiderman3,
      avg: 2.0,
      director: "Sam Raimi",
      writers: "Sam Raimi",
      stars: "Tobey Maguire, Kirsten Dunst, Topher Grace",
    },
    {
      name: "Leon",
      discription:
        "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
      rating: [2, 3, 4, 2],
      img: "https://www.youtube.com/embed/rNw0D7Hh0DY",
      img2: leon,
      avg: 2.7,
      director: "Luc Besson",
      writers: "Luc Besson",
      stars: "Jean Reno, Gary Oldman, Natalie Portman",
    },
    {
      name: "Mad Max",
      discription:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      rating: [4, 4, 4, 3],
      img: "https://www.youtube.com/embed/YWNWi-ZWL3c",
      img2: madmax,
      avg: 3.7,
      director: "George Miller",
      writers: "George Miller, Brendan McCarthy ",
      stars: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    },
    {
      name: "Rambo 2",
      discription:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      rating: [2, 2, 2, 4],
      img: "https://www.youtube.com/embed/IQt9bDOGTgg",
      img2: rambo2,
      avg: 2.5,
      director: "George P. Cosmatos",
      writers: "David Morrell, Kevin Jarre",
      stars: "Sylvester Stallone, Richard Crenna, Charles Napier",
    },
    {
      name: "Riddic",
      discription:
        "Left for dead on a sun-scorched planet, Riddick finds himself up against an alien race of predators. Activating an emergency beacon alerts two ships: one carrying a new breed of mercenary, the other captained by a man from Riddick's past.",
      rating: [3, 2, 2, 1],
      img: "https://www.youtube.com/embed/iP3eFIOBU0k",
      img2: riddic,
      avg: 2.0,
      director: "David Twohy",
      writers: "David Twohy, Jim Wheat",
      stars: "Vin Diesel, Karl Urban, Katee Sackhoff",
    },
    {
      name: "Robocop 2",
      discription:
        "Robocop is back to fight a new seed of crime and a more dangerous and violent robot version of himself.",
      rating: [2, 3, 5, 2],
      img: "https://www.youtube.com/embed/HNcy89RqF5Q",
      img2: robocop2,
      avg: 3.0,
      director: "Irvin Kershner",
      writers: "Edward Neumeier,  Michael Miner ",
      stars: "Peter Weller, Nancy Allen, Belinda Bauer",
    },
    {
      name: "Terminator 2",
      discription:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
      rating: [1, 2, 3, 5],
      img: "https://www.youtube.com/embed/CRRlbK5w8AE",
      img2: terminator2,
      avg: 2.7,
      director: "James Cameron",
      writers: "James Cameron, William Wisher",
      stars: "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
    },
    {
      name: "Ghost in the Shell",
      discription:
        "In the near future, Major Mira Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
      rating: [1, 5, 3, 5],
      img: "https://www.youtube.com/embed/tRkb1X9ovI4",
      img2: ghost,
      avg: 3.5,
      director: "Rupert Sanders",
      writers: "Jamie Moss, Shirow Masamune",
      stars: " Scarlett Johansson, Pilou Asbæk, Takeshi Kitano",
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


<iframe width="853" height="480" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>