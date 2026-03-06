import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/types";

type CourseCardProps = { course: Course };

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/review-mon-hoc/${course.id}`}
      className="block cursor-pointer overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
    >
      {course.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
          <Image
            src={course.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
      <div className="p-5">
        <span className="text-sm font-medium text-[var(--color-primary)]">
          {course.code}
        </span>
        <h3 className="mt-1 font-heading text-lg font-semibold text-[var(--color-text)]">
          {course.name}
        </h3>
        {course.description && (
          <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
            {course.description}
          </p>
        )}
      </div>
    </Link>
  );
}
