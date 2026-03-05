import Link from "next/link";
import { TabNav } from "@/components/TabNav";
import { AdSlot } from "@/components/AdSlot";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            Review Course
          </Link>
          <TabNav />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <section className="mb-8 text-center">
          <h1 className="mb-3 font-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Chia sẻ trải nghiệm học tập & thực tập
          </h1>
          <p className="text-lg text-neutral-600">
            Đánh giá môn học và doanh nghiệp để giúp sinh viên có cái nhìn tổng quan trước khi chọn môn hoặc nơi thực tập.
          </p>
        </section>

        <AdSlot slotId="home-banner" className="mb-8 min-h-[120px]" />

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/review-mon-hoc"
            className="group flex flex-col rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            <h2 className="mb-2 font-heading text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
              Review Môn Học
            </h2>
            <p className="text-neutral-600">
              Tìm và đánh giá môn học theo độ khó, khối lượng bài tập, áp lực thi cử và nhiều tiêu chí khác.
            </p>
          </Link>
          <Link
            href="/review-doanh-nghiep"
            className="group flex flex-col rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            <h2 className="mb-2 font-heading text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
              Review Doanh Nghiệp
            </h2>
            <p className="text-neutral-600">
              Xem và đánh giá doanh nghiệp từ trải nghiệm thực tập, môi trường làm việc và cơ hội phát triển.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
