import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/home/index.tsx";
import Search from "./pages/search/index.tsx";
import HotelList from "./pages/hotel-list/index.tsx";
import HotelDetail from "./pages/hotel-detail/index.tsx";
import RoomSelection from "./pages/room-selection/index.tsx";

function ScrollToTop() {
  const location = useLocation();
  React.useLayoutEffect(() => {
    const scrollToTop = () => {
      // Try all common scroll roots
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    // Run now and on next frame to catch late layout shifts
    scrollToTop();
    const raf = requestAnimationFrame(scrollToTop);
    return () => cancelAnimationFrame(raf);
  }, [location.pathname, location.search]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/hotel/:id/rooms" element={<RoomSelection />} />
      </Routes>
    </>
  );
}

export default App;
