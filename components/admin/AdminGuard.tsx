"use client";

import type { ReactNode } from "react";
import { useAdminAuth } from "./AdminAuthContext";

type AdminGuardProps = {
  children: ReactNode;
};

export function AdminGuard({ children }: AdminGuardProps) {
  // Giữ hook auth để có thể mở rộng logic sau này nếu cần.
  void useAdminAuth;
  return <>{children}</>;
}

