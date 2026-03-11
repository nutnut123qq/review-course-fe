import { AdSlot } from "@/components/AdSlot";

type AdsTwoSidesProps = {
  children: React.ReactNode;
  leftSlotId?: string;
  rightSlotId?: string;
};

export function AdsTwoSides({
  children,
  leftSlotId = "review-left",
  rightSlotId = "review-right",
}: AdsTwoSidesProps) {
  return (
    <div className="px-2 py-6 md:px-4 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4">
      <aside className="hidden lg:block">
        <div className="sticky top-28 h-[70vh] w-[180px]">
          <AdSlot slotId={leftSlotId} className="h-full w-full" />
        </div>
      </aside>

      <div className="mx-auto max-w-6xl">{children}</div>

      <aside className="hidden lg:block">
        <div className="sticky top-28 h-[70vh] w-[180px] ml-auto">
          <AdSlot slotId={rightSlotId} className="h-full w-full" />
        </div>
      </aside>
    </div>
  );
}

