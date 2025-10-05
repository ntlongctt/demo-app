import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import RecentSearches from "../../components/RecentSearches";
import Promotions from "../../components/Promotions";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gradient Header Background */}
      <div className="relative">
        <img className="absolute w-full" src="/home-header.png" />
        <div className="relative z-10">
          <Header />
        </div>
      </div>

      <main className="pb-8 relative">
        <BookingForm className="mb-8" />
        <RecentSearches className="mb-8" />
        <Promotions />
      </main>
    </div>
  );
}
