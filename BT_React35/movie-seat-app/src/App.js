import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SeatBooking from './Pages/MovieSeat/SeatBooking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<SeatBooking/>}>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
