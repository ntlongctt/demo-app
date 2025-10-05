interface HotelDescriptionProps {
  className?: string;
}

export default function HotelDescription({
  className = "",
}: HotelDescriptionProps) {
  return (
    <div className={`bg-white  p-4 ${className}`}>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Mô tả khách sạn</h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        Nằm dọc theo bãi biển Mỹ Khê cát trắng trải dài thơ mộng, khu nghỉ dưỡng
        dành cho gia đình sang trọng bật nhất thế giới Premier Village Danang
        được ưu ái tọa lạc ở vị trí đắc địa, hưởng trọn khung cảnh nên thơ của
        thành phố biển Đà Nẵng. Với thiết kế hiện đại và dịch vụ đẳng cấp, khách
        sạn mang đến trải nghiệm nghỉ dưỡng tuyệt vời cho du khách.
      </p>
    </div>
  );
}
