import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import SeatStore from './pages/MovieSeatSelection/SeatStore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />} />
        <Route path='seat' element={<SeatStore />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
