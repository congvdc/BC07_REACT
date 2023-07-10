import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import SeatStore from './pages/MovieSeatSelection/SeatStore';
import Seat from './pages/MovieSeatSelection/Seat';
import SeatMovie from './pages/MovieSeatSelection/SeatMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />} />
        {/* <Route path='seat' element={<Seat />} /> */}
        {/* <Route path='test' element={<SeatStore />} /> */}
        {/* <Route path='seatmovie' element={<SeatMovie />} /> */}
      </Routes>
    </BrowserRouter>
  )

}

export default App;
