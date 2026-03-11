 "use client";

import { useMemo, useState } from "react";

type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  locked?: boolean;
};

const initialUsers: AdminUser[] = [
  { id: "u1", name: "Sinh viên A", email: "sva@example.com", role: "user" },
  { id: "u2", name: "Sinh viên B", email: "svb@example.com", role: "user" },
  { id: "u3", name: "Admin chính", email: "admin@example.com", role: "admin" },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<AdminUser | null>(null);
  const [draft, setDraft] = useState<{ name: string; email: string; role: "user" | "admin" }>({
    name: "",
    email: "",
    role: "user",
  });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
    );
  }, [users, search]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold text-[var(--color-text)]">
        Quản lý người dùng
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-neutral-500">
          Dữ liệu mock phục vụ minh hoạ giao diện; thao tác khoá/mở chỉ thay đổi
          trong phiên hiện tại.
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm theo tên, email hoặc vai trò..."
          className="w-full max-w-xs rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-[var(--shadow-sm)]">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs text-neutral-500">
            <tr>
              <th className="px-4 py-3">Tên</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Vai trò</th>
              <th className="px-4 py-3 text-center">Trạng thái</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr
                key={u.id}
                className="border-t border-neutral-100 text-[13px] text-[var(--color-text)]"
              >
                <td className="px-4 py-3 align-top font-semibold">{u.name}</td>
                <td className="px-4 py-3 align-top text-neutral-700">
                  {u.email}
                </td>
                <td className="px-4 py-3 align-top">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${
                      u.role === "admin"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-neutral-100 text-neutral-700"
                    }`}
                  >
                    {u.role === "admin" ? "Admin" : "User"}
                  </span>
                </td>
                <td className="px-4 py-3 align-top text-center">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${
                      u.locked
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {u.locked ? "Đã khoá" : "Hoạt động"}
                  </span>
                </td>
                <td className="px-4 py-3 align-top text-right">
                  <button
                    type="button"
                    className="mr-2 cursor-pointer text-xs text-[var(--color-primary)] hover:underline"
                    onClick={() => {
                      setEditing(u);
                      setDraft({
                        name: u.name,
                        email: u.email,
                        role: u.role,
                      });
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-xs text-[var(--color-primary)] hover:underline"
                    onClick={() => {
                      setUsers((prev) =>
                        prev.map((user) =>
                          user.id === u.id ? { ...user, locked: !user.locked } : user
                        )
                      );
                    }}
                  >
                    {u.locked ? "Mở khoá" : "Khoá"}
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
              Sửa thông tin người dùng
            </h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">
                  Tên hiển thị
                </label>
                <input
                  value={draft.name}
                  onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">
                  Email
                </label>
                <input
                  value={draft.email}
                  onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[var(--color-text)]">
                  Vai trò
                </label>
                <select
                  value={draft.role}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      role: e.target.value === "admin" ? "admin" : "user",
                    }))
                  }
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
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
                  setUsers((prev) =>
                    prev.map((user) =>
                      user.id === editing.id
                        ? {
                            ...user,
                            name: draft.name || user.name,
                            email: draft.email || user.email,
                            role: draft.role,
                          }
                        : user
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
    </div>
  );
}

