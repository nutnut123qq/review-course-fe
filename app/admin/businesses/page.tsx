 "use client";

import { useMemo, useState, useRef } from "react";
import { businesses as baseBusinesses, businessReviews } from "@/lib/mockData";

type AdminBusiness = (typeof baseBusinesses)[number] & { hidden?: boolean };

const emptyAddDraft = {
  name: "",
  industry: "",
  description: "",
  imagePreview: "" as string,
};

export default function AdminBusinessesPage() {
  const [businesses, setBusinesses] = useState<AdminBusiness[]>(baseBusinesses);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<AdminBusiness | null>(null);
  const [draft, setDraft] = useState<{ name: string; industry: string; description: string }>({
    name: "",
    industry: "",
    description: "",
  });
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addDraft, setAddDraft] = useState(emptyAddDraft);
  const addImageInputRef = useRef<HTMLInputElement>(null);
  const [businessToDelete, setBusinessToDelete] = useState<AdminBusiness | null>(null);

  const withStats = useMemo(() => {
    const q = search.trim().toLowerCase();
    const base = businesses.map((b) => ({
      ...b,
      reviewCount: businessReviews.filter((r) => r.businessId === b.id).length,
    }));
    if (!q) return base;
    return base.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.industry?.toLowerCase().includes(q) ||
        b.description?.toLowerCase().includes(q)
    );
  }, [businesses, search]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold text-[var(--color-text)]">
          Quản lý doanh nghiệp
        </h2>
        <button
          type="button"
          className="cursor-pointer rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
          onClick={() => {
            setAddDraft(emptyAddDraft);
            setAddModalOpen(true);
          }}
        >
          Thêm doanh nghiệp
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-neutral-500">
          Dữ liệu chỉ thay đổi trong phiên làm việc hiện tại (mock), không ghi vào
          backend.
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm theo tên, ngành hoặc mô tả doanh nghiệp..."
          className="w-full max-w-xs rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-[var(--shadow-sm)]">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs text-neutral-500">
            <tr>
              <th className="px-4 py-3">Tên doanh nghiệp</th>
              <th className="px-4 py-3">Ngành</th>
              <th className="px-4 py-3">Mô tả</th>
              <th className="px-4 py-3 text-center">Số review</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {withStats.map((b) => (
              <tr
                key={b.id}
                className="border-t border-neutral-100 text-[13px] text-[var(--color-text)]"
              >
                <td className="px-4 py-3 align-top font-semibold">{b.name}</td>
                <td className="px-4 py-3 align-top text-neutral-700">
                  {b.industry ?? "—"}
                </td>
                <td className="px-4 py-3 align-top text-neutral-600">
                  {b.description}
                </td>
                <td className="px-4 py-3 align-top text-center text-neutral-700">
                  {b.reviewCount}
                </td>
                <td className="px-4 py-3 align-top text-right">
                  <button
                    type="button"
                    className="mr-2 cursor-pointer text-xs text-[var(--color-primary)] hover:underline"
                    onClick={() => {
                      setEditing(b);
                      setDraft({
                        name: b.name,
                        industry: b.industry ?? "",
                        description: b.description ?? "",
                      });
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-xs text-red-500 hover:underline"
                    onClick={() => setBusinessToDelete(b)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[var(--shadow-lg)]">
            <h3 className="mb-3 text-base font-semibold text-[var(--color-text)]">
              Sửa thông tin doanh nghiệp
            </h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">
                  Tên doanh nghiệp
                </label>
                <input
                  value={draft.name}
                  onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">
                  Ngành
                </label>
                <input
                  value={draft.industry}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, industry: e.target.value }))
                  }
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">
                  Mô tả
                </label>
                <textarea
                  rows={3}
                  value={draft.description}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, description: e.target.value }))
                  }
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2 text-xs">
              <button
                type="button"
                className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 hover:bg-neutral-100"
                onClick={() => setEditing(null)}
              >
                Huỷ
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-[var(--color-primary)] px-4 py-2 font-semibold text-white shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                onClick={() => {
                  setBusinesses((prev) =>
                    prev.map((item) =>
                      item.id === editing.id
                        ? {
                            ...item,
                            name: draft.name || item.name,
                            industry: draft.industry,
                            description: draft.description,
                          }
                        : item
                    )
                  );
                  setEditing(null);
                }}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {businessToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setBusinessToDelete(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-[var(--shadow-lg)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-2 text-base font-semibold text-[var(--color-text)]">
              Xác nhận xóa
            </h3>
            <p className="mb-4 text-sm text-neutral-600">
              Bạn có chắc muốn xóa doanh nghiệp &quot;{businessToDelete.name}&quot; khỏi danh sách?
            </p>
            <div className="flex justify-end gap-2 text-xs">
              <button
                type="button"
                className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 hover:bg-neutral-100"
                onClick={() => setBusinessToDelete(null)}
              >
                Huỷ
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                onClick={() => {
                  setBusinesses((prev) =>
                    prev.filter((item) => item.id !== businessToDelete.id)
                  );
                  setBusinessToDelete(null);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {addModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setAddModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[var(--shadow-lg)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-3 text-base font-semibold text-[var(--color-text)]">
              Thêm doanh nghiệp
            </h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">Tên doanh nghiệp</label>
                <input
                  value={addDraft.name}
                  onChange={(e) =>
                    setAddDraft((d) => ({ ...d, name: e.target.value }))
                  }
                  placeholder="VD: FPT Software"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">Ngành</label>
                <input
                  value={addDraft.industry}
                  onChange={(e) =>
                    setAddDraft((d) => ({ ...d, industry: e.target.value }))
                  }
                  placeholder="VD: IT, E-commerce"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">Mô tả</label>
                <textarea
                  rows={3}
                  value={addDraft.description}
                  onChange={(e) =>
                    setAddDraft((d) => ({ ...d, description: e.target.value }))
                  }
                  placeholder="Mô tả ngắn về doanh nghiệp..."
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">Hình ảnh</label>
                <input
                  ref={addImageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () =>
                      setAddDraft((d) => ({
                        ...d,
                        imagePreview: reader.result as string,
                      }));
                    reader.readAsDataURL(file);
                  }}
                />
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => addImageInputRef.current?.click()}
                    className="cursor-pointer rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-3 py-3 text-xs text-neutral-600 hover:border-[var(--color-primary)] hover:bg-neutral-100"
                  >
                    Chọn ảnh tải lên
                  </button>
                  {addDraft.imagePreview && (
                    <div className="relative h-32 w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                      <img
                        src={addDraft.imagePreview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setAddDraft((d) => ({ ...d, imagePreview: "" }))
                        }
                        className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white hover:bg-black/70"
                      >
                        Xóa ảnh
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2 text-xs">
              <button
                type="button"
                className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 hover:bg-neutral-100"
                onClick={() => setAddModalOpen(false)}
              >
                Huỷ
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-[var(--color-primary)] px-4 py-2 font-semibold text-white shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                onClick={() => {
                  const nextIndex = businesses.length + 1;
                  setBusinesses((prev) => [
                    ...prev,
                    {
                      id: `mock-b${nextIndex}`,
                      name: addDraft.name.trim() || "Doanh nghiệp mới",
                      industry: addDraft.industry.trim() || undefined,
                      description: addDraft.description.trim() || undefined,
                      image: addDraft.imagePreview || undefined,
                    },
                  ]);
                  setAddDraft(emptyAddDraft);
                  setAddModalOpen(false);
                }}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


