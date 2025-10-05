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
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Xếp hạng và đánh giá
      </h2>

      {/* Overall Rating */}
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold text-orange-500 mr-3">4,8</span>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-green-500 rounded mr-2 flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Ấn tượng</div>
            <div className="text-xs text-gray-600">từ 1.6k lượt đánh giá</div>
          </div>
        </div>
      </div>

      {/* Review Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          Phòng sạch (16)
        </span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          Nhân viên thân thiện (7)
        </span>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-lg p-3">
            <div className="text-sm text-gray-600 mb-2">{review.content}</div>
            <div className="text-xs text-gray-500">{review.author}</div>
          </div>
        ))}
      </div>

      {/* View All Reviews */}
      <button className="text-orange-500 text-sm font-medium mt-4">
        Xem tất cả &gt;
      </button>
    </div>
  );
}
