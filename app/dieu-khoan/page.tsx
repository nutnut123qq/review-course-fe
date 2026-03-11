export default function DieuKhoanPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-12">
        <p className="mb-3 inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
          Điều khoản sử dụng
        </p>
        <h1 className="mb-4 font-heading text-2xl font-extrabold leading-tight text-[var(--color-text)] md:text-3xl">
          Điều khoản sử dụng nền tảng Review Course
        </h1>
        <p className="mb-6 text-sm text-neutral-600 md:text-base">
          Cảm ơn bạn đã sử dụng Review Course. Đây là nền tảng cộng đồng, phi lợi nhuận, được xây dựng{" "}
          <span className="font-semibold">bởi sinh viên và dành cho sinh viên</span>, nhằm chia sẻ trải nghiệm
          về môn học và doanh nghiệp thực tập. Bằng việc truy cập hoặc sử dụng website, bạn đồng ý tuân thủ
          các Điều khoản sử dụng dưới đây.
        </p>

        <section className="space-y-4 text-sm text-neutral-700 md:text-base">
          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              1. Mục đích và phạm vi áp dụng
            </h2>
            <p className="mb-2">
              Review Course được tạo ra để giúp sinh viên tham khảo thông tin, trải nghiệm thực tế về các môn học
              và doanh nghiệp thực tập. Nền tảng không đại diện và không trực thuộc bất kỳ trường đại học hay
              doanh nghiệp nào, bao gồm cả Đại học FPT.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Đối tượng sử dụng chính là sinh viên, cựu sinh viên và những người quan tâm đến việc học tập và thực tập.
              </li>
              <li>
                Thông tin trên website mang tính tham khảo,{" "}
                <span className="font-semibold">không phải</span> tư vấn chính thức từ nhà trường hoặc doanh nghiệp.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              2. Tài khoản và bảo mật
            </h2>
            <p className="mb-2">
              Khi tạo tài khoản trên Review Course, bạn cần cung cấp thông tin chính xác trong khả năng của mình và
              tự chịu trách nhiệm về hoạt động diễn ra dưới tài khoản đó.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Không chia sẻ mật khẩu hoặc cho người khác sử dụng tài khoản của bạn.</li>
              <li>
                Nếu phát hiện hành vi truy cập trái phép, bạn nên thông báo sớm cho đội ngũ quản trị qua email hỗ trợ.
              </li>
              <li>
                Chúng tôi có quyền tạm khóa hoặc chấm dứt tài khoản nếu phát hiện vi phạm Điều khoản hoặc có dấu hiệu
                lạm dụng hệ thống.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              3. Quy tắc đăng nội dung (review và bình luận)
            </h2>
            <p className="mb-2">
              Mục tiêu của Review Course là xây dựng một cộng đồng tôn trọng, trung thực và hữu ích. Khi đăng review
              hoặc bình luận, bạn đồng ý:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Không sử dụng ngôn từ xúc phạm, tục tĩu, bôi nhọ, vu khống hoặc phân biệt đối xử.</li>
              <li>
                Không tiết lộ thông tin cá nhân nhạy cảm của người khác (ví dụ: số điện thoại, địa chỉ nhà, email cá nhân,
                thông tin riêng tư chưa được họ đồng ý chia sẻ).
              </li>
              <li>Không đăng nội dung spam, quảng cáo, đường link độc hại hoặc nội dung không liên quan.</li>
              <li>Chỉ chia sẻ trải nghiệm cá nhân một cách trung thực, mang tính xây dựng, tôn trọng đối tượng được nhắc tới.</li>
            </ul>
            <p className="mt-2">
              Đội ngũ quản trị có quyền chỉnh sửa, ẩn hoặc xóa bất kỳ nội dung nào được cho là không phù hợp, vi phạm pháp luật
              hoặc vi phạm Điều khoản này, mà không cần thông báo trước.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              4. Quyền sở hữu nội dung
            </h2>
            <p className="mb-2">
              Bạn giữ quyền sở hữu đối với nội dung mà mình đăng tải (review, bình luận, đánh giá, v.v.). Bằng việc đăng nội dung
              lên Review Course, bạn đồng ý cấp cho chúng tôi một giấy phép không độc quyền, toàn cầu, miễn phí bản quyền để:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Hiển thị nội dung đó trên nền tảng Review Course.</li>
              <li>Lưu trữ, sao lưu và xử lý nội dung nhằm vận hành hệ thống.</li>
              <li>Sử dụng nội dung ở dạng tổng hợp, ẩn danh phục vụ mục đích thống kê hoặc cải thiện sản phẩm.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              5. Miễn trừ trách nhiệm
            </h2>
            <p className="mb-2">
              Nội dung review và bình luận trên Review Course là{" "}
              <span className="font-semibold">ý kiến cá nhân của người dùng</span>, không phải ý kiến chính thức của Review Course,
              của bất kỳ trường đại học hay doanh nghiệp nào.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Chúng tôi không cam kết và không chịu trách nhiệm về tính chính xác, đầy đủ hoặc cập nhật của các review.</li>
              <li>
                Chúng tôi không chịu trách nhiệm đối với bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc bạn sử dụng
                hoặc tin tưởng vào thông tin trên website.
              </li>
              <li>
                Bạn nên tự đánh giá và kết hợp nhiều nguồn thông tin khác trước khi đưa ra quyết định về việc chọn môn học, giảng viên
                hay doanh nghiệp thực tập.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              6. Thay đổi, tạm ngưng dịch vụ
            </h2>
            <p className="mb-2">
              Vì là dự án cộng đồng, Review Course có thể được cập nhật, thay đổi tính năng hoặc tạm ngưng hoạt động bất kỳ lúc nào để
              bảo trì, nâng cấp hoặc vì lý do khách quan khác.
            </p>
            <p>
              Chúng tôi sẽ cố gắng thông báo trước cho người dùng trong trường hợp có thay đổi lớn, nhưng không có nghĩa vụ phải đảm bảo
              website luôn hoạt động liên tục, không gián đoạn.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              7. Sửa đổi Điều khoản sử dụng
            </h2>
            <p className="mb-2">
              Chúng tôi có thể cập nhật Điều khoản sử dụng này theo thời gian để phù hợp với tính năng mới hoặc yêu cầu pháp lý.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Phiên bản Điều khoản mới sẽ được công bố trên trang này kèm theo{" "}
                <span className="font-semibold">ngày hiệu lực</span>.
              </li>
              <li>
                Khi tiếp tục sử dụng Review Course sau thời điểm cập nhật, bạn được xem là đã đồng ý với phiên bản Điều khoản mới.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              8. Liên hệ
            </h2>
            <p>
              Nếu bạn có câu hỏi, góp ý hoặc yêu cầu liên quan đến Điều khoản sử dụng, vui lòng liên hệ đội ngũ phát triển Review Course
              qua email:{" "}
              <a
                href="mailto:support@reviewcourse.local"
                className="font-medium text-[var(--color-primary)] underline underline-offset-2 hover:no-underline"
              >
                support@reviewcourse.local
              </a>
              .
            </p>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Điều khoản sử dụng này mang tính chất tham khảo và có thể được điều chỉnh, bổ sung trong tương lai khi Review Course phát
            triển thêm tính năng mới.
          </p>
        </section>
      </main>
    </div>
  );
}

