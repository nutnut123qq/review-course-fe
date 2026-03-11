"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  courses,
  getCourseSummary,
  businesses,
  getBusinessSummary,
} from "@/lib/mockData";

export default function BangXepHangPage() {
  const topCourses = useMemo(() => {
    return courses
      .map((course) => {
        const summary = getCourseSummary(course.id);
        const avg =
          summary.length > 0
            ? summary.reduce((s, c) => s + c.average, 0) / summary.length
            : 0;
        const count = summary[0]?.count ?? 0;
        return {
          ...course,
          average: Math.round(avg * 10) / 10,
          reviewCount: count,
        };
      })
      .sort((a, b) => {
        if (b.average !== a.average) return b.average - a.average;
        return b.reviewCount - a.reviewCount;
      });
  }, []);

  const topBusinesses = useMemo(() => {
    return businesses
      .map((business) => {
        const summary = getBusinessSummary(business.id);
        const avg =
          summary.length > 0
            ? summary.reduce((s, c) => s + c.average, 0) / summary.length
            : 0;
        const count = summary[0]?.count ?? 0;
        return {
          ...business,
          average: Math.round(avg * 10) / 10,
          reviewCount: count,
        };
      })
      .sort((a, b) => {
        if (b.average !== a.average) return b.average - a.average;
        return b.reviewCount - a.reviewCount;
      });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h1 className="mb-8 font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
          Bảng xếp hạng
        </h1>

        <section className="mb-12">
          <h2 className="mb-4 font-heading text-lg font-semibold text-[var(--color-text)]">
            Top môn học
          </h2>
          <ul className="space-y-3">
            {topCourses.map((course, index) => (
              <li key={course.id}>
                <Link
                  href={`/review-mon-hoc/${course.id}`}
                  className="flex cursor-pointer flex-wrap items-center justify-between gap-2 rounded-xl border-2 border-neutral-200 bg-white p-4 transition-colors hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  <span className="text-sm font-medium text-neutral-500">
                    #{index + 1}
                  </span>
                  <span className="font-medium text-[var(--color-text)]">
                    {course.code} – {course.name}
                  </span>
                  <span className="text-sm text-neutral-600">
                    Điểm TB: <strong>{course.average.toFixed(1)}</strong> (
                    {course.reviewCount} lượt)
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-lg font-semibold text-[var(--color-text)]">
            Top doanh nghiệp
          </h2>
          <ul className="space-y-3">
            {topBusinesses.map((business, index) => (
              <li key={business.id}>
                <Link
                  href={`/review-doanh-nghiep/${business.id}`}
                  className="flex cursor-pointer flex-wrap items-center justify-between gap-2 rounded-xl border-2 border-neutral-200 bg-white p-4 transition-colors hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  <span className="text-sm font-medium text-neutral-500">
                    #{index + 1}
                  </span>
                  <span className="font-medium text-[var(--color-text)]">
                    {business.name}
                    {business.industry && (
                      <span className="ml-2 text-sm font-normal text-[var(--color-primary)]">
                        ({business.industry})
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-neutral-600">
                    Điểm TB: <strong>{business.average.toFixed(1)}</strong> (
                    {business.reviewCount} lượt)
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
