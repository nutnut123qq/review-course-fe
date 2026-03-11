"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type SearchSuggestion = {
  id: string;
  label: string;
  subtitle?: string;
  /** Giá trị gán vào ô search khi chọn (để filter đúng). */
  searchText: string;
};

type CourseSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Danh sách gợi ý (môn học hoặc doanh nghiệp). Hiển thị theo ký tự gõ. */
  suggestions?: SearchSuggestion[];
  /** Số gợi ý tối đa hiển thị. */
  maxSuggestions?: number;
};

export function CourseSearch({
  value,
  onChange,
  placeholder = "Tìm theo tên hoặc mã môn...",
  suggestions = [],
  maxSuggestions = 10,
}: CourseSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const q = value.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return suggestions.slice(0, maxSuggestions);
    return suggestions
      .filter(
        (s) =>
          s.label.toLowerCase().includes(q) ||
          (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
          s.searchText.toLowerCase().includes(q)
      )
      .slice(0, maxSuggestions);
  }, [suggestions, q, maxSuggestions]);

  const close = useCallback(() => {
    setIsOpen(false);
    setHighlightIndex(-1);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  const handleSelect = useCallback(
    (s: SearchSuggestion) => {
      onChange(s.searchText);
      close();
    },
    [onChange, close]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || filtered.length === 0) {
        if (e.key === "Escape") close();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIndex((i) => (i < filtered.length - 1 ? i + 1 : 0));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIndex((i) => (i <= 0 ? filtered.length - 1 : i - 1));
        return;
      }
      if (e.key === "Enter" && highlightIndex >= 0 && filtered[highlightIndex]) {
        e.preventDefault();
        handleSelect(filtered[highlightIndex]);
        return;
      }
      if (e.key === "Escape") {
        close();
      }
    },
    [isOpen, filtered, highlightIndex, handleSelect, close]
  );

  useEffect(() => {
    setHighlightIndex(-1);
  }, [value]);

  const showDropdown = isOpen && filtered.length > 0;

  return (
    <div ref={containerRef} className="relative">
      <label className="block">
        <span className="sr-only">Tìm kiếm</span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Tìm kiếm"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-controls="search-suggestions"
          id="search-suggestions-label"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[var(--color-text)] transition-[border-color,box-shadow] duration-200 placeholder:text-neutral-500 focus:border-[var(--color-primary)] focus:outline-none focus:ring-[3px] focus:ring-[var(--color-primary)]/20"
        />
      </label>

      {showDropdown && (
        <ul
          id="search-suggestions"
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[280px] overflow-auto rounded-xl border border-neutral-200 bg-white py-1 shadow-lg"
        >
          {filtered.map((s, i) => (
            <li key={s.id} role="option" aria-selected={i === highlightIndex}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(s);
                }}
                onMouseEnter={() => setHighlightIndex(i)}
                className={`flex w-full flex-col items-start gap-0.5 px-4 py-2.5 text-left transition-colors ${
                  i === highlightIndex
                    ? "bg-neutral-100 text-[var(--color-text)]"
                    : "bg-white text-[var(--color-text)] hover:bg-neutral-50"
                }`}
              >
                <span className="font-medium">{s.label}</span>
                {s.subtitle && (
                  <span className="text-xs text-neutral-500">{s.subtitle}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
