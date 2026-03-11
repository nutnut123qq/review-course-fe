 "use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { AdminAuthProvider } from "@/components/admin/AdminAuthContext";
import { AdminGuard } from "@/components/admin/AdminGuard";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminAuthProvider>
      <AdminGuard>
        <div className="flex min-h-screen bg-[var(--color-background)]">
          <aside className="hidden w-64 flex-shrink-0 border-r border-neutral-200 bg-white/90 px-4 py-6 shadow-[var(--shadow-md)] md:flex md:flex-col">
            <Link
              href="/"
              className="mb-6 text-lg font-bold tracking-tight text-[var(--color-text)] hover:text-[var(--color-primary)]"
            >
              Review Course
            </Link>
            <nav className="space-y-1 text-sm text-neutral-600">
              <Link
                href="/admin"
                className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              >
                Tổng quan
              </Link>
              <Link
                href="/admin/courses"
                className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              >
                Môn học
              </Link>
              <Link
                href="/admin/businesses"
                className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              >
                Doanh nghiệp
              </Link>
              <Link
                href="/admin/users"
                className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              >
                Người dùng
              </Link>
              <Link
                href="/admin/reviews"
                className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              >
                Review & bình luận
              </Link>
            </nav>
          </aside>

          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 md:px-6">
            <header className="mb-4 flex items-center justify-between">
              <h1 className="text-lg font-semibold text-[var(--color-text)]">
                Admin Dashboard
              </h1>
              <span className="text-xs text-neutral-500">
                Giao diện quản trị (mock) – không ảnh hưởng dữ liệu thật
              </span>
            </header>
            {children}
          </main>
        </div>
      </AdminGuard>
    </AdminAuthProvider>
  );
}


