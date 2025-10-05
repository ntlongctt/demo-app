interface HotelReviewsProps {
  className?: string;
}

const reviews = [
  {
    id: "1",
    author: "Nguyen V.A.",
    content:
      "Khách sạn mới và đẹp, gần biển đi lại thuận tiện nhân viên nhiệt tình và thân thiện. Xung quanh có nhiều quán ăn ngon và giá cả hợp lý.",
  },
  {
    id: "2",
    author: "Tran V.B.",
    content:
      "Khách sạn mới và đẹp, gần biển đi lại thuận tiện nhân viên nhiệt tình và thân thiện. Xung quanh có nhiều quán ăn ngon và giá cả hợp lý.",
  },
];

export default function HotelReviews({ className = "" }: HotelReviewsProps) {
  return (
    <div className={`bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 ">
          Xếp hạng và đánh giá
        </h2>
        <button className="text-[#e8952f] text-sm font-medium ">
          Xem tất cả &gt;
        </button>
      </div>

      {/* Overall Rating */}
      <div className="flex items-center mb-4 mt-4">
        <span className="text-3xl font-bold text-[#e8952f] mr-3 mb-2">4,8</span>
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center">
            <img src="/ratint.svg" alt="rating icon" className="w-6 h-6" />
            <div className="text-sm ml-2 font-bold text-gray-900">Ấn tượng</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">từ 1.6k lượt đánh giá</div>
          </div>
        </div>
      </div>

      {/* Review Categories */}
      <div className="flex gap-2 mb-4 overflow-x-auto flex-nowrap">
        <span className="bg-gray-100 inline-flex flex-shrink-0 whitespace-nowrap text-gray-700 px-3 py-1 rounded-full text-sm">
          Phòng sạch (16)
        </span>
        <span className="bg-gray-100 inline-flex flex-shrink-0 whitespace-nowrap text-gray-700 px-3 py-1 rounded-full text-sm">
          Nhân viên thân thiện (7)
        </span>
        <span className="bg-gray-100 inline-flex flex-shrink-0 whitespace-nowrap text-gray-700 px-3 py-1 rounded-full text-sm">
          Nhân viên thân thiện (7)
        </span>
      </div>

      <h3 className="font-bold mb-2">Đánh giá hàng đầu</h3>
      {/* Individual Reviews */}
      <div className="space-y-4 flex overflow-x-auto flex-nowrap gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 rounded-lg p-3 m-0 flex flex-col gap-2 min-w-[250px]"
          >
            <div className="text-sm text-gray-600">{review.content}</div>
            <div className="text-xs text-gray-500">{review.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
