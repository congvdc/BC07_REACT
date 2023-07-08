import React from "react";
import SeatList from "../pages/MovieSeatSelection/SeatList";
import { NavLink } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <div>
      <h1>Movie Seat Selection</h1>
      <div className="container">
          <SeatList />

          


      </div>

      <NavLink to="/seat">seat test</NavLink>
    </div>
  );
};

export default HomeTemplate;
