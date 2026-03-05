"use client";

import { useMemo, useState } from "react";
import { TabNav } from "@/components/TabNav";
import { AdSlot } from "@/components/AdSlot";
import { CourseSearch } from "@/components/CourseSearch";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/mockData";
import Link from "next/link";

export default function ReviewMonHocPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

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
        <h1 className="mb-6 font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
          Review Môn Học
        </h1>

        <div className="mb-6">
          <CourseSearch value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="py-8 text-center text-neutral-600">
            Không tìm thấy môn học nào. Thử từ khóa khác.
          </p>
        )}

        <AdSlot slotId="course-list-bottom" className="mt-8 min-h-[100px]" />
      </main>
    </div>
  );
}
