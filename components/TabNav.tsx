"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/review-mon-hoc", label: "Review Môn Học" },
  { href: "/review-doanh-nghiep", label: "Review Doanh Nghiệp" },
  { href: "/bang-xep-hang", label: "Bảng xếp hạng" },
] as const;

export function TabNav() {
  const pathname = usePathname();
  const effectivePath = pathname === "/" ? "/review-mon-hoc" : pathname;

  return (
    <nav aria-label="Chuyển tab chính">
      <ul className="flex gap-2">
        {tabs.map(({ href, label }) => {
          const isActive =
            effectivePath === href || effectivePath.startsWith(href + "/");
          return (
            <li key={href}>
              <Link
                href={href}
                className={`inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text)] hover:bg-neutral-100"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
