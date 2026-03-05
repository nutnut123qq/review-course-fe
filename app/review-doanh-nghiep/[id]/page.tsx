"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TabNav } from "@/components/TabNav";
import { AdSlot } from "@/components/AdSlot";
import { BusinessCriteriaRatings } from "@/components/BusinessCriteriaRatings";
import { BusinessReviewForm } from "@/components/BusinessReviewForm";
import {
  businesses,
  businessCriteria,
  getBusinessSummary,
} from "@/lib/mockData";
import type { BusinessCriterionKey, BusinessReview } from "@/types";

export default function BusinessDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const [localReviews, setLocalReviews] = useState<BusinessReview[]>([]);

  const business = useMemo(
    () => businesses.find((b) => b.id === id),
    [id]
  );

  const summary = useMemo(
    () => getBusinessSummary(id, localReviews),
    [id, localReviews]
  );

  const handleSubmit = useCallback(
    (
      ratings: { criterionKey: BusinessCriterionKey; value: number }[],
      reviewerName?: string
    ) => {
      const newReview: BusinessReview = {
        id: `local-br-${Date.now()}`,
        businessId: id,
        reviewerName,
        ratings,
        createdAt: new Date().toISOString(),
      };
      setLocalReviews((prev) => [...prev, newReview]);
    },
    [id]
  );

  if (!business) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] p-8">
        <p className="text-neutral-600">Không tìm thấy doanh nghiệp.</p>
        <Link
          href="/review-doanh-nghiep"
          className="mt-4 inline-block text-[var(--color-primary)] underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            Review Course
          </Link>
          <TabNav />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <Link
          href="/review-doanh-nghiep"
          className="mb-6 inline-block text-sm text-[var(--color-primary)] underline transition-colors hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          ← Quay lại danh sách doanh nghiệp
        </Link>

        <div className="mb-6">
          {business.industry && (
            <span className="text-sm font-medium text-[var(--color-primary)]">
              {business.industry}
            </span>
          )}
          <h1 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
            {business.name}
          </h1>
          {business.description && (
            <p className="mt-2 text-neutral-600">{business.description}</p>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <BusinessCriteriaRatings
              summary={summary}
              criteria={businessCriteria}
            />
            <div className="rounded-2xl border-2 border-neutral-200 bg-white p-6">
              <BusinessReviewForm
                criteria={businessCriteria}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
          <div>
            <AdSlot
              slotId="business-detail-sidebar"
              className="min-h-[200px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
