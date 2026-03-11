import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Khám phá
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/review-mon-hoc"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Review Môn Học
                </Link>
              </li>
              <li>
                <Link
                  href="/review-doanh-nghiep"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Review Doanh Nghiệp
                </Link>
              </li>
              <li>
                <Link
                  href="/bang-xep-hang"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Bảng xếp hạng
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Pháp lý & Hỗ trợ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dieu-khoan"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/chinh-sach-bao-mat"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/huong-dan-danh-gia"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Hướng dẫn đánh giá
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@reviewcourse.local"
                  className="text-neutral-600 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm italic text-neutral-500">
          For Students, By Students
        </p>
        <p className="mt-2 text-center text-xs text-neutral-500">
          © {currentYear} Review Course. Dự án cộng đồng.
        </p>
      </div>
    </footer>
  );
}
