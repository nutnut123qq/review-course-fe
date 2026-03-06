"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { TabNav } from "@/components/TabNav";
import { AdSlot } from "@/components/AdSlot";
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
            </div>
          </div>
          <div>
            <AdSlot slotId="course-detail-sidebar" className="min-h-[200px]" />
          </div>
        </div>
      </main>
    </div>
  );
}
