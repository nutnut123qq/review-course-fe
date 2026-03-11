 "use client";

import { useMemo, useState } from "react";
import { courses, courseReviews, businesses, businessReviews } from "@/lib/mockData";

type ReviewRow = {
  id: string;
  type: "course" | "business";
  targetName: string;
  createdAt: string;
  reviewerName?: string;
  hidden?: boolean;
};

const initialRows: ReviewRow[] = [
  ...courseReviews.map((r) => ({
    id: r.id,
    type: "course" as const,
    targetName: courses.find((c) => c.id === r.courseId)?.name ?? "Môn học",
    createdAt: r.createdAt,
    reviewerName: r.reviewerName,
  })),
  ...businessReviews.map((r) => ({
    id: r.id,
    type: "business" as const,
    targetName: businesses.find((b) => b.id === r.businessId)?.name ?? "Doanh nghiệp",
    createdAt: r.createdAt,
    reviewerName: r.reviewerName,
  })),
].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

export default function AdminReviewsPage() {
  const [rows, setRows] = useState<ReviewRow[]>(initialRows);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.targetName.toLowerCase().includes(q) ||
        r.reviewerName?.toLowerCase().includes(q) ||
        (r.type === "course" ? "môn học" : "doanh nghiệp").includes(q)
    );
  }, [rows, search]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold text-[var(--color-text)]">
        Quản lý review & bình luận
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-neutral-500">
          Giao diện mock cho phép ẩn/hiện review; tác động chỉ trong phiên hiện tại, không ảnh hưởng
          dữ liệu gốc.
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm theo môn/doanh nghiệp, người review hoặc loại review..."
          className="w-full max-w-xs rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-[var(--shadow-sm)]">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs text-neutral-500">
            <tr>
              <th className="px-4 py-3">Loại</th>
              <th className="px-4 py-3">Đối tượng</th>
              <th className="px-4 py-3">Người review</th>
              <th className="px-4 py-3">Thời gian</th>
              <th className="px-4 py-3 text-center">Trạng thái</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr
                key={r.id}
                className="border-t border-neutral-100 text-[13px] text-[var(--color-text)]"
              >
                <td className="px-4 py-3 align-top">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${
                      r.type === "course"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {r.type === "course" ? "Môn học" : "Doanh nghiệp"}
                  </span>
                </td>
                <td className="px-4 py-3 align-top font-semibold">{r.targetName}</td>
                <td className="px-4 py-3 align-top text-neutral-700">
                  {r.reviewerName ?? "Ẩn danh"}
                </td>
                <td className="px-4 py-3 align-top text-neutral-600">
                  {new Date(r.createdAt).toLocaleString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </td>
                <td className="px-4 py-3 align-top text-center">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${
                      r.hidden
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {r.hidden ? "Đã ẩn" : "Hiển thị"}
                  </span>
                </td>
                <td className="px-4 py-3 align-top text-right">
                  <button
                    type="button"
                    className="cursor-pointer text-xs text-[var(--color-primary)] hover:underline"
                    onClick={() =>
                      setRows((prev) =>
                        prev.map((row) =>
                          row.id === r.id ? { ...row, hidden: !row.hidden } : row
                        )
                      )
                    }
                  >
                    {r.hidden ? "Bỏ ẩn" : "Ẩn review"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

