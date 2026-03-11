"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AdsTwoSides } from "@/components/AdsTwoSides";
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
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<
    { id: string; author: string; content: string; createdAt: string }[]
  >([]);

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
      <AdsTwoSides>
        <Link
          href="/review-doanh-nghiep"
          className="mb-6 inline-block text-sm text-[var(--color-primary)] underline transition-colors hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          ← Quay lại danh sách doanh nghiệp
        </Link>

        {business.image && (
          <div className="relative mb-6 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src={business.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        )}

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

              <div className="mt-6 border-t border-neutral-200 pt-4">
                <h2 className="mb-2 font-heading text-sm font-semibold text-[var(--color-text)]">
                  Bình luận thêm về doanh nghiệp
                </h2>
                <p className="mb-3 text-xs text-neutral-500">
                  Ghi lại trải nghiệm thực tế, văn hoá làm việc hoặc lời khuyên cho các bạn chuẩn bị thực tập.
                </p>
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const value = commentText.trim();
                    if (!value) return;
                    setComments((prev) => [
                      {
                        id: `biz-cmt-${Date.now()}`,
                        author: "Người dùng ẩn danh",
                        content: value,
                        createdAt: new Date().toISOString(),
                      },
                      ...prev,
                    ]);
                    setCommentText("");
                  }}
                >
                  <textarea
                    rows={3}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Ví dụ: Môi trường khá thân thiện, leader hỗ trợ tốt nhưng OT nhiều vào giai đoạn nước rút..."
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  />
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>
                      Tránh nêu đích danh cá nhân, giữ bình luận khách quan và tôn trọng.
                    </span>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                    >
                      Gửi bình luận
                    </button>
                  </div>
                </form>

                {comments.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {comments.map((c) => (
                      <div
                        key={c.id}
                        className="rounded-xl bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)]"
                      >
                        <div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
                          <span>{c.author}</span>
                          <span>
                            {new Date(c.createdAt).toLocaleString("vi-VN", {
                              hour: "2-digit",
                              minute: "2-digit",
                              day: "2-digit",
                              month: "2-digit",
                            })}
                          </span>
                        </div>
                        <p className="whitespace-pre-line">{c.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div />
        </div>
      </AdsTwoSides>
    </div>
  );
}
