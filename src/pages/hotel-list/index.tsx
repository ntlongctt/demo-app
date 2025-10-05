import HotelListHeader from "../../components/HotelListHeader";
import BookingDetailsBar from "../../components/BookingDetailsBar";
import FilterSortBar from "../../components/FilterSortBar";
import HotelCard from "../../components/HotelCard";

interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: number;
  imageUrl?: string;
}

const hotels: Hotel[] = [
  {
    id: "1",
    name: "Vinpearl Resort & Spa Nha Trang Bay",
    rating: 4.8,
    price: 3338700,
    imageUrl: "./hotel1.png",
  },
  {
    id: "2",
    name: "Vinpearl Luxury Nha Trang",
    rating: 4.8,
    price: 8342100,
    imageUrl: "./hotel2.png",
  },
  {
    id: "3",
    name: "Vinpearl Resort Nha Trang",
    rating: 4.6,
    price: 2594700,
    imageUrl: "./hotel3.png",
  },
  {
    id: "4",
    name: "Vinpearl Beachfront Nha Trang",
    rating: 4.9,
    price: 1627500,
    imageUrl: "./hotel4.png",
  },
  {
    id: "5",
    name: "Hòn Tằm Resort",
    rating: 4.7,
    price: 2743500,
    imageUrl: "./hotel5.png",
  },
];

export default function HotelList() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HotelListHeader />
      <BookingDetailsBar />
      <FilterSortBar />

      <main className="p-4">
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
