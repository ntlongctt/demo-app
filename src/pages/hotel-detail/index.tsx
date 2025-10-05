import HotelDetailHeader from "../../components/HotelDetailHeader";
import ImageCarousel from "../../components/ImageCarousel";
import HotelInfoCard from "../../components/HotelInfoCard";
import HotelDetailTabs from "../../components/HotelDetailTabs";
import HotelDescription from "../../components/HotelDescription";
import HotelAmenities from "../../components/HotelAmenities";
import CheckInOutTimes from "../../components/CheckInOutTimes";
import HotelReviews from "../../components/HotelReviews";
import StickyBookingBar from "../../components/StickyBookingBar";

export default function HotelDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HotelDetailHeader />
      <ImageCarousel />
      <HotelInfoCard />
      <HotelDetailTabs />

      <div className="space-y-4 pb-20">
        <HotelDescription />
        <HotelAmenities />
        <CheckInOutTimes />
        <HotelReviews />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <StickyBookingBar />
      </div>
    </div>
  );
}
