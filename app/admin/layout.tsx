"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminAuthProvider, useAdminAuth } from "@/components/admin/AdminAuthContext";
import { AdminGuard } from "@/components/admin/AdminGuard";

type AdminLayoutProps = {
  children: ReactNode;
};

function AdminShell({ children }: { children: ReactNode }) {
  const { logout } = useAdminAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
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

        <button
          type="button"
          onClick={handleLogout}
          className="mt-auto inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          Đăng xuất
        </button>
      </aside>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 md:px-6">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminAuthProvider>
      <AdminGuard>
        <AdminShell>{children}</AdminShell>
      </AdminGuard>
    </AdminAuthProvider>
  );
}

