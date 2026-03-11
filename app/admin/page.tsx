import Link from "next/link";
import { courses, courseReviews, businesses, businessReviews } from "@/lib/mockData";

export default function AdminHomePage() {
  const totalCourses = courses.length;
  const totalCourseReviews = courseReviews.length;
  const totalBusinesses = businesses.length;
  const totalBusinessReviews = businessReviews.length;

  const topCourses = [...courses]
    .map((c) => ({
      ...c,
      reviewCount: courseReviews.filter((r) => r.courseId === c.id).length,
    }))
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 3);

  const topBusinesses = [...businesses]
    .map((b) => ({
      ...b,
      reviewCount: businessReviews.filter((r) => r.businessId === b.id).length,
    }))
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">
        Chào mừng bạn đến với khu vực quản trị <strong>Review Course</strong>.
      </p>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-md)]">
          <p className="text-xs font-medium text-neutral-500">Tổng số môn học</p>
          <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">
            {totalCourses}
          </p>
          <p className="mt-1 text-[11px] text-neutral-500">
            Đang được sinh viên review trên hệ thống.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-md)]">
          <p className="text-xs font-medium text-neutral-500">Tổng review môn</p>
          <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">
            {totalCourseReviews}
          </p>
          <p className="mt-1 text-[11px] text-neutral-500">
            Lượt đánh giá chi tiết cho các môn học.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-md)]">
          <p className="text-xs font-medium text-neutral-500">
            Tổng số doanh nghiệp
          </p>
          <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">
            {totalBusinesses}
          </p>
          <p className="mt-1 text-[11px] text-neutral-500">
            Được sinh viên ghi nhận trải nghiệm thực tập.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-md)]">
          <p className="text-xs font-medium text-neutral-500">
            Tổng review doanh nghiệp
          </p>
          <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">
            {totalBusinessReviews}
          </p>
          <p className="mt-1 text-[11px] text-neutral-500">
            Lượt đánh giá chi tiết về doanh nghiệp.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[var(--shadow-sm)]">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[var(--color-text)]">
              Top môn được review nhiều
            </h2>
            <Link
              href="/admin/courses"
              className="text-xs text-[var(--color-primary)] hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <ul className="space-y-2 text-sm">
            {topCourses.map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-2"
              >
                <span className="font-medium text-[var(--color-text)]">
                  {c.code} – {c.name}
                </span>
                <span className="text-xs text-neutral-500">
                  {c.reviewCount} review
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[var(--shadow-sm)]">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[var(--color-text)]">
              Top doanh nghiệp được review nhiều
            </h2>
            <Link
              href="/admin/businesses"
              className="text-xs text-[var(--color-primary)] hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <ul className="space-y-2 text-sm">
            {topBusinesses.map((b) => (
              <li
                key={b.id}
                className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-2"
              >
                <span className="font-medium text-[var(--color-text)]">
                  {b.name}
                </span>
                <span className="text-xs text-neutral-500">
                  {b.reviewCount} review
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

