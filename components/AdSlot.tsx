type AdSlotProps = {
  slotId: string;
  className?: string;
};

export function AdSlot({ slotId, className = "" }: AdSlotProps) {
  return (
    <aside
      aria-label="Khu vực quảng cáo"
      className={`flex min-h-[90px] items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-100 text-sm text-neutral-500 ${className}`}
      data-ad-slot={slotId}
    >
      Quảng cáo
    </aside>
  );
}
