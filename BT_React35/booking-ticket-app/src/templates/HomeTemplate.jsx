import React from "react";
import SeatList from "../pages/MovieSeatSelection/SeatList";
import { NavLink, Route } from "react-router-dom";
import SeatMovie from "../pages/MovieSeatSelection/SeatMovie";
import SeatStore from "../pages/MovieSeatSelection/SeatStore";
import Seat from "../pages/MovieSeatSelection/Seat";

const HomeTemplate = () => {
  return (
    <div>
      <h1>Movie Seat Selection</h1>
      <div className="container">
          <Seat />

          


      </div>

      {/* <NavLink to="/seat">seat test</NavLink>
      <Route path='test' element={<SeatStore />} />
      <Route path='seatmovie' element={<SeatMovie />} /> */}
    </div>
  );
};

export default HomeTemplate;
