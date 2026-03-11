"use client";

import { useMemo, useState } from "react";
import { AdsTwoSides } from "@/components/AdsTwoSides";
import { CourseSearch } from "@/components/CourseSearch";
import { BusinessCard } from "@/components/BusinessCard";
import { businesses } from "@/lib/mockData";

const industries = [...new Set(businesses.map((b) => b.industry).filter(Boolean))] as string[];

const businessSuggestions = businesses.map((b) => ({
  id: b.id,
  label: b.name,
  subtitle: b.industry ?? undefined,
  searchText: b.name,
}));

export default function ReviewDoanhNghiepPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);

  const filteredBusinesses = useMemo(() => {
    let list = industryFilter
      ? businesses.filter((b) => b.industry === industryFilter)
      : businesses;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.industry?.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [searchQuery, industryFilter]);

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
              <span className="text-base" aria-hidden>ℹ️</span>
              <span>Điều khoản sử dụng và Chính sách bảo mật đã được cập nhật.</span>
            </span>
            <a href="#" className="font-medium underline hover:no-underline">Điều khoản</a>
            <a href="#" className="font-medium underline hover:no-underline">Chính sách</a>
          </div>
        </section>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setIndustryFilter(null)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
              industryFilter === null
                ? "bg-[var(--color-primary)] text-white"
                : "bg-neutral-100 text-[var(--color-text)] hover:bg-neutral-200"
            }`}
            aria-pressed={industryFilter === null}
          >
            Tất cả
          </button>
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setIndustryFilter(ind)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                industryFilter === ind
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-neutral-100 text-[var(--color-text)] hover:bg-neutral-200"
              }`}
              aria-pressed={industryFilter === ind}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <CourseSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Tìm theo tên hoặc ngành..."
            suggestions={businessSuggestions}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <p className="py-8 text-center text-neutral-600">
            Không tìm thấy doanh nghiệp nào. Thử từ khóa khác.
          </p>
        )}
      </AdsTwoSides>
    </div>
  );
}
