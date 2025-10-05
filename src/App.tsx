import { Routes, Route } from "react-router";
import Home from "./pages/home/index.tsx";
import Search from "./pages/search/index.tsx";
import HotelList from "./pages/hotel-list/index.tsx";
import HotelDetail from "./pages/hotel-detail/index.tsx";
import RoomSelection from "./pages/room-selection/index.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="/hotel/:id" element={<HotelDetail />} />
      <Route path="/hotel/:id/rooms" element={<RoomSelection />} />
    </Routes>
  );
}

export default App;
