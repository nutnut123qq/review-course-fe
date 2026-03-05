"use client";

type CourseSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function CourseSearch({
  value,
  onChange,
  placeholder = "Tìm theo tên hoặc mã môn...",
}: CourseSearchProps) {
  return (
    <label className="block">
      <span className="sr-only">Tìm kiếm môn học</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Tìm kiếm môn học theo tên hoặc mã"
        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[var(--color-text)] transition-[border-color,box-shadow] duration-200 placeholder:text-neutral-500 focus:border-[var(--color-primary)] focus:outline-none focus:ring-[3px] focus:ring-[var(--color-primary)]/20"
      />
    </label>
  );
}
