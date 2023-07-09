import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import SeatStore from './pages/MovieSeatSelection/SeatStore';
import Seat from './pages/MovieSeatSelection/Seat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />} />
        <Route path='seat' element={<Seat />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
