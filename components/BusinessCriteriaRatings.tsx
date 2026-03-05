import type { BusinessCriteriaSummary, BusinessCriterion } from "@/types";

type BusinessCriteriaRatingsProps = {
  summary: BusinessCriteriaSummary[];
  criteria: BusinessCriterion[];
};

function getLabelForValue(criterion: BusinessCriterion, avg: number): string {
  if (avg <= 0) return "—";
  if (avg < 1.5) return criterion.options[0]?.label ?? "—";
  if (avg < 2.5) return criterion.options[1]?.label ?? "—";
  return criterion.options[2]?.label ?? "—";
}

export function BusinessCriteriaRatings({
  summary,
  criteria,
}: BusinessCriteriaRatingsProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
        Kết quả đánh giá
      </h2>
      <ul className="space-y-3" role="list">
        {summary.map((item) => {
          const criterion = criteria.find((c) => c.key === item.criterionKey);
          if (!criterion) return null;
          const labelText = getLabelForValue(criterion, item.average);
          const widthPercent = item.average > 0 ? (item.average / 3) * 100 : 0;
          return (
            <li
              key={item.criterionKey}
              className="rounded-xl border border-neutral-200 bg-white p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">
                  {criterion.label}
                </span>
                <span className="text-sm text-neutral-600">
                  {item.average > 0 ? (
                    <>
                      <strong>{item.average.toFixed(1)}</strong> ({item.count}{" "}
                      lượt) — {labelText}
                    </>
                  ) : (
                    <>Chưa có đánh giá</>
                  )}
                </span>
              </div>
              {item.count > 0 && (
                <div
                  className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100"
                  role="presentation"
                >
                  <div
                    className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-300"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
