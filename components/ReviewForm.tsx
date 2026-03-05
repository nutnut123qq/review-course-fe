"use client";

import { useState } from "react";
import type { CourseCriterionKey, Criterion } from "@/types";

type ReviewFormProps = {
  criteria: Criterion[];
  onSubmit: (ratings: { criterionKey: CourseCriterionKey; value: number }[], reviewerName?: string) => void;
};

export function ReviewForm({ criteria, onSubmit }: ReviewFormProps) {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [reviewerName, setReviewerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entries = criteria.map((c) => ({
      criterionKey: c.key,
      value: ratings[c.key] ?? 2,
    }));
    const missing = entries.some((e) => e.value < 1 || e.value > 3);
    if (missing) {
      const filled = criteria.every((c) => ratings[c.key] != null);
      if (!filled) return;
    }
    setIsSubmitting(true);
    onSubmit(entries, reviewerName.trim() || undefined);
    setRatings({});
    setReviewerName("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
        Đánh giá của bạn
      </h2>

      <div>
        <label htmlFor="reviewer-name" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
          Tên hoặc biệt danh (tùy chọn)
        </label>
        <input
          id="reviewer-name"
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="Ẩn danh nếu để trống"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-[var(--color-text)] transition-[border-color] duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>

      {criteria.map((criterion) => (
        <fieldset key={criterion.key}>
          <legend className="mb-2 text-sm font-medium text-[var(--color-text)]">
            {criterion.label}
          </legend>
          <div className="flex flex-wrap gap-3">
            {criterion.options.map((opt) => (
              <label
                key={opt.value}
                className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name={criterion.key}
                  value={opt.value}
                  checked={ratings[criterion.key] === opt.value}
                  onChange={() =>
                    setRatings((prev) => ({ ...prev, [criterion.key]: opt.value }))
                  }
                  className="h-4 w-4 border-neutral-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                <span className="text-sm text-[var(--color-text)]">{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-[44px] cursor-pointer rounded-xl bg-[var(--color-cta)] px-6 py-3 font-semibold text-white shadow-[var(--shadow-md)] transition-all duration-200 hover:opacity-90 hover:shadow-[var(--shadow-lg)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta)]"
      >
        {isSubmitting ? "Đang gửi..." : "Gửi đánh giá"}
      </button>
    </form>
  );
}
