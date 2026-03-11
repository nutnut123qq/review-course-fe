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
    <div className="w-full px-2 py-6 md:px-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-4">
      <aside className="hidden lg:block">
        <div className="sticky top-28 h-[70vh] w-[180px]">
          <AdSlot slotId={leftSlotId} className="h-full w-full" />
        </div>
      </aside>

      <div className="min-w-0">
        <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-28 ml-auto h-[70vh] w-[180px]">
          <AdSlot slotId={rightSlotId} className="h-full w-full" />
        </div>
      </aside>
    </div>
  );
}

