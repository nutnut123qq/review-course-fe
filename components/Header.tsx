 "use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { TabNav } from "@/components/TabNav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  const close = () => setOpen(false);

  const modal =
    open && typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={close} aria-hidden="true" />
            <div className="pointer-events-auto absolute left-1/2 top-24 w-full max-w-md -translate-x-1/2 rounded-3xl bg-white px-6 py-6 shadow-[var(--shadow-lg)] md:top-28">
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 h-8 w-8 cursor-pointer rounded-full bg-neutral-100 text-sm font-semibold text-neutral-500 transition hover:bg-neutral-200"
                aria-label="Đóng"
              >
                ✕
              </button>

              <div className="mb-2 text-center">
                <h2 className="mb-1 font-heading text-2xl font-bold text-[var(--color-text)]">
                  {mode === "login" ? "Đăng nhập" : "Đăng ký"}
                </h2>
                <p className="text-sm text-neutral-500">
                  {mode === "login" ? "Chào mừng bạn quay lại!" : "Tạo tài khoản để bắt đầu review."}
                </p>
              </div>

              <button
                type="button"
                className="mb-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-text)] shadow-[var(--shadow-sm)] transition hover:bg-neutral-50"
              >
                <span className="text-lg">G</span>
                <span>{mode === "login" ? "Tiếp tục với Google" : "Đăng ký với Google"}</span>
              </button>

              <div className="mb-4 flex items-center gap-3 text-xs text-neutral-400">
                <span className="h-px flex-1 bg-neutral-200" />
                <span>HOẶC</span>
                <span className="h-px flex-1 bg-neutral-200" />
              </div>

              <form className="space-y-4">
                {mode === "register" && (
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[var(--color-text)]">
                      Họ và tên (hoặc nickname)
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-[var(--color-text)]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="student@fpt.edu.vn"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-[var(--color-text)]">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {mode === "register" && (
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[var(--color-text)]">
                      Nhập lại mật khẩu
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    />
                  </div>
                )}

                {mode === "login" && (
                  <div className="flex items-center justify-between text-[11px] text-neutral-500">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      />
                      <span>Ghi nhớ đăng nhập</span>
                    </label>
                    <button
                      type="button"
                      className="cursor-pointer text-[var(--color-primary)] hover:underline"
                    >
                      Quên mật khẩu?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-1 flex w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-text)] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
                >
                  {mode === "login" ? "Đăng nhập" : "Đăng ký"}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-neutral-500">
                {mode === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                <button
                  type="button"
                  onClick={() => setMode(mode === "login" ? "register" : "login")}
                  className="cursor-pointer font-semibold text-[var(--color-primary)] hover:underline"
                >
                  {mode === "login" ? "Đăng ký ngay" : "Đăng nhập"}
                </button>
              </p>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          Review Course
        </Link>
        <div className="flex items-center gap-4">
          <TabNav />
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setOpen(true);
            }}
            className="hidden rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] md:inline-flex md:items-center md:justify-center"
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {modal}
    </header>
  );
}
