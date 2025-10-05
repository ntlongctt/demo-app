import ImageCarousel from "../../components/ImageCarousel";
import HotelInfoCard from "../../components/HotelInfoCard";
import HotelDescription from "../../components/HotelDescription";
import HotelAmenities from "../../components/HotelAmenities";
import CheckInOutTimes from "../../components/CheckInOutTimes";
import HotelReviews from "../../components/HotelReviews";
import StickyBookingBar from "../../components/StickyBookingBar";

export default function HotelDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <HotelDetailHeader /> */}
      <ImageCarousel />
      <div className="flex relative top-[230px] pb-[140px] flex-col gap-2">
        <HotelInfoCard />
        <HotelReviews />
        <HotelAmenities />
        <CheckInOutTimes />
        <HotelDescription />
      </div>
      {/* <HotelDetailTabs /> */}

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <StickyBookingBar />
      </div>
    </div>
  );
}
