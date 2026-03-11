"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAdminAuth } from "./AdminAuthContext";
import type { ReactNode } from "react";

type AdminGuardProps = {
  children: ReactNode;
};

export function AdminGuard({ children }: AdminGuardProps) {
  const { isAuthenticated } = useAdminAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname) return;
    if (!isAuthenticated && !pathname.startsWith("/admin/login")) {
      router.replace("/admin/login");
    }
    if (isAuthenticated && pathname.startsWith("/admin/login")) {
      router.replace("/admin");
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated && !pathname?.startsWith("/admin/login")) {
    return null;
  }

  return <>{children}</>;
}

