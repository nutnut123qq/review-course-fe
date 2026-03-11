"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AdsTwoSides } from "@/components/AdsTwoSides";
import { CriteriaRatings } from "@/components/CriteriaRatings";
import { ReviewForm } from "@/components/ReviewForm";
import {
  courses,
  courseCriteria,
  getCourseSummary,
} from "@/lib/mockData";
import type { CourseCriterionKey, CourseReview } from "@/types";

export default function CourseDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const [localReviews, setLocalReviews] = useState<CourseReview[]>([]);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<
    { id: string; author: string; content: string; createdAt: string }[]
  >([]);

  const course = useMemo(
    () => courses.find((c) => c.id === id),
    [id]
  );

  const summary = useMemo(
    () => getCourseSummary(id, localReviews),
    [id, localReviews]
  );

  const handleSubmit = useCallback(
    (
      ratings: { criterionKey: CourseCriterionKey; value: number }[],
      reviewerName?: string
    ) => {
      const newReview: CourseReview = {
        id: `local-${Date.now()}`,
        courseId: id,
        reviewerName,
        ratings,
        createdAt: new Date().toISOString(),
      };
      setLocalReviews((prev) => [...prev, newReview]);
    },
    [id]
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] p-8">
        <p className="text-neutral-600">Không tìm thấy môn học.</p>
        <Link
          href="/review-mon-hoc"
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
          href="/review-mon-hoc"
          className="mb-6 inline-block text-sm text-[var(--color-primary)] underline transition-colors hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          ← Quay lại danh sách môn
        </Link>

        {course.image && (
          <div className="relative mb-6 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src={course.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        )}

        <div className="mb-6">
          <span className="text-sm font-medium text-[var(--color-primary)]">
            {course.code}
          </span>
          <h1 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
            {course.name}
          </h1>
          {course.description && (
            <p className="mt-2 text-neutral-600">{course.description}</p>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <CriteriaRatings summary={summary} criteria={courseCriteria} />
            <div className="rounded-2xl border-2 border-neutral-200 bg-white p-6">
              <ReviewForm criteria={courseCriteria} onSubmit={handleSubmit} />

              <div className="mt-6 border-t border-neutral-200 pt-4">
                <h2 className="mb-2 font-heading text-sm font-semibold text-[var(--color-text)]">
                  Bình luận thêm về môn học
                </h2>
                <p className="mb-3 text-xs text-neutral-500">
                  Chia sẻ cảm nhận chi tiết, tips học tập hoặc lưu ý cho các bạn sinh viên khác.
                </p>
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const value = commentText.trim();
                    if (!value) return;
                    setComments((prev) => [
                      {
                        id: `cmt-${Date.now()}`,
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
                    placeholder="Ví dụ: Lịch thi hơi dày, nên làm project sớm để đỡ bị dí deadline..."
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  />
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>
                      Vui lòng giữ bình luận lịch sự, không tiết lộ thông tin cá nhân nhạy cảm.
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
