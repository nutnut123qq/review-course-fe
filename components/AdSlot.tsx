type AdSlotProps = {
  slotId: string;
  className?: string;
};

const AD_IMAGES: Record<string, { src: string; alt: string }> = {
  "home-banner": {
    src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Sinh viên làm việc nhóm với laptop và tài liệu học tập",
  },
  "course-list-sidebar": {
    src: "https://images.pexels.com/photos/4145199/pexels-photo-4145199.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Không gian học tập hiện đại với laptop và sổ tay",
  },
  "business-list-sidebar": {
    src: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cuộc họp trong doanh nghiệp với nhiều nhân viên",
  },
  "review-left": {
    src: "https://images.pexels.com/photos/4145199/pexels-photo-4145199.jpeg?auto=compress&cs=tinysrgb&w=600&h=900",
    alt: "Sinh viên đang học tập với laptop và sổ tay",
  },
  "review-right": {
    src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=900",
    alt: "Nhóm sinh viên thảo luận bài tập",
  },
};

export function AdSlot({ slotId, className = "" }: AdSlotProps) {
  const ad = AD_IMAGES[slotId] ?? AD_IMAGES["home-banner"];

  return (
    <aside
      aria-label="Khu vực quảng cáo"
      className={`overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 ${className}`}
      data-ad-slot={slotId}
    >
      <img
        src={ad.src}
        alt={ad.alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </aside>
  );
}
