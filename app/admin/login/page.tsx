"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/components/admin/AdminAuthContext";

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const router = useRouter();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      login(email);
      router.replace("/admin");
    } else {
      setError("Email hoặc mật khẩu không đúng (demo: admin@example.com / admin123).");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-[var(--shadow-lg)]">
        <h1 className="mb-2 text-center font-heading text-xl font-bold text-[var(--color-text)]">
          Đăng nhập Admin
        </h1>
        <p className="mb-4 text-center text-xs text-neutral-500">
          Chế độ demo – chỉ kiểm tra trên frontend, không ảnh hưởng dữ liệu thật.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 text-sm">
            <label className="font-medium text-[var(--color-text)]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="font-medium text-[var(--color-text)]">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-text)] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-md)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

