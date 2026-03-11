"use client";

import { useMemo, useState } from "react";
import { AdsTwoSides } from "@/components/AdsTwoSides";
import { CourseSearch } from "@/components/CourseSearch";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/mockData";

const courseSuggestions = courses.map((c) => ({
  id: c.id,
  label: c.name,
  subtitle: c.code,
  searchText: c.name,
}));

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
      <AdsTwoSides>
        <section className="mb-8 text-center">
          <p className="mb-3 inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            Review Course
          </p>
          <h1 className="mb-3 font-heading text-3xl font-extrabold leading-tight text-[var(--color-text)] md:text-5xl">
            Review Môn Học &{" "}
            <span className="text-[var(--color-primary)]">Doanh Nghiệp</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-neutral-600 md:text-base">
            Nền tảng chia sẻ trải nghiệm học tập, giúp sinh viên tham khảo trước
            khi chọn môn học hoặc nơi thực tập phù hợp.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-[11px] text-neutral-400 md:text-xs">
            Dự án cộng đồng – For Students, By Students. Nội dung mang tính tham
            khảo, không trực thuộc bất kỳ tổ chức giáo dục hay doanh nghiệp nào.
          </p>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-xs text-blue-700 md:text-sm">
            <span className="inline-flex items-center gap-1">
              <span className="text-base" aria-hidden>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-blue-600"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12" r="10" className="fill-blue-100" />
                  <path
                    d="M12 7.25a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm0 3.7c-.55 0-1 .45-1 1v4.1c0 .55.45 1 1 1s1-.45 1-1v-4.1c0-.55-.45-1-1-1Z"
                    className="fill-blue-600"
                  />
                </svg>
              </span>
              <span>Điều khoản sử dụng và Chính sách bảo mật đã được cập nhật.</span>
            </span>
            <a href="/dieu-khoan" className="font-medium underline hover:no-underline">Điều khoản</a>
            <a href="/chinh-sach-bao-mat" className="font-medium underline hover:no-underline">Chính sách</a>
          </div>
        </section>

        <div className="mb-6">
          <CourseSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Tìm theo tên hoặc mã môn..."
            suggestions={courseSuggestions}
          />
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
      </AdsTwoSides>
    </div>
  );
}
