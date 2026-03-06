import Link from "next/link";
import Image from "next/image";
import type { Business } from "@/types";

type BusinessCardProps = { business: Business };

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link
      href={`/review-doanh-nghiep/${business.id}`}
      className="block cursor-pointer overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
    >
      {business.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
          <Image
            src={business.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
      <div className="p-5">
        {business.industry && (
          <span className="text-sm font-medium text-[var(--color-primary)]">
            {business.industry}
          </span>
        )}
        <h3 className="mt-1 font-heading text-lg font-semibold text-[var(--color-text)]">
          {business.name}
        </h3>
        {business.description && (
          <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
            {business.description}
          </p>
        )}
      </div>
    </Link>
  );
}
