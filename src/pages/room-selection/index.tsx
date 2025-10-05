import RoomSelectionHeader from "../../components/RoomSelectionHeader";
import RoomFilterBar from "../../components/RoomFilterBar";
import RoomCard from "../../components/RoomCard";
import DetailsBar from "@/components/DetailBar";

interface Room {
  id: string;
  name: string;
  size: string;
  capacity: string;
  bedding: string;
  amenities: Array<{
    id: string;
    label: string;
    type: "positive" | "negative";
  }>;
  price: number;
  imageUrl?: string;
}

const rooms: Room[] = [
  {
    id: "1",
    name: "Biệt thự hướng vườn",
    size: "60m2",
    capacity: "2 người lớn, 2 trẻ em",
    bedding: "1 giường đơn, 1 giường cỡ king",
    amenities: [
      { id: "breakfast", label: "Bữa sáng miễn phí", type: "positive" },
      { id: "non-refundable", label: "Không hoàn tiền", type: "negative" },
      { id: "wifi", label: "Wifi miễn phí", type: "positive" },
    ],
    price: 5561400,
    imageUrl: "/select-room.png",
  },
  {
    id: "2",
    name: "Biệt thự hướng biển",
    size: "75m2",
    capacity: "2 người lớn, 2 trẻ em",
    bedding: "2 giường đơn, 1 giường cỡ king",
    amenities: [
      { id: "breakfast", label: "Bữa sáng miễn phí", type: "positive" },
      { id: "non-refundable", label: "Không hoàn tiền", type: "negative" },
      { id: "wifi", label: "Wifi miễn phí", type: "positive" },
    ],
    price: 8342100,
    imageUrl: "/select-room.png",
  },
  {
    id: "3",
    name: "Biệt thự 2 tầng",
    size: "110m2",
    capacity: "2 người lớn, 2 trẻ em",
    bedding: "2 giường đơn, 1 giường cỡ king",
    amenities: [
      { id: "breakfast", label: "Bữa sáng miễn phí", type: "positive" },
      { id: "non-refundable", label: "Không hoàn tiền", type: "negative" },
      { id: "wifi", label: "Wifi miễn phí", type: "positive" },
    ],
    price: 8621100,
    imageUrl: "/select-room.png",
  },
  {
    id: "4",
    name: "Biệt thự 2 tầng lớn",
    size: "134m2",
    capacity: "2 người lớn, 2 trẻ em",
    bedding: "2 giường đơn, 1 giường cỡ king",
    amenities: [
      { id: "breakfast", label: "Bữa sáng miễn phí", type: "positive" },
      { id: "non-refundable", label: "Không hoàn tiền", type: "negative" },
      { id: "wifi", label: "Wifi miễn phí", type: "positive" },
    ],
    price: 9244200,
    imageUrl: "/select-room.png",
  },
];

export default function RoomSelection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <RoomSelectionHeader />
      <DetailsBar />
      <RoomFilterBar />

      <main className="p-4">
        <div className="space-y-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </main>
    </div>
  );
}
