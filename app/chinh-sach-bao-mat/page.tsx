export default function ChinhSachBaoMatPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-12">
        <p className="mb-3 inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
          Chính sách bảo mật
        </p>
        <h1 className="mb-4 font-heading text-2xl font-extrabold leading-tight text-[var(--color-text)] md:text-3xl">
          Chính sách bảo mật của Review Course
        </h1>
        <p className="mb-6 text-sm text-neutral-600 md:text-base">
          Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi sử
          dụng nền tảng Review Course. Đây là{" "}
          <span className="font-semibold">dự án cộng đồng, phi lợi nhuận</span>, không trực thuộc và không đại diện cho
          Đại học FPT hay bất kỳ tổ chức/ doanh nghiệp nào.
        </p>

        <section className="space-y-4 text-sm text-neutral-700 md:text-base">
          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              1. Phạm vi áp dụng
            </h2>
            <p>
              Chính sách này áp dụng cho tất cả người dùng truy cập và sử dụng website Review Course, bao gồm việc tạo
              tài khoản, đăng review, bình luận hoặc chỉ đơn giản là xem nội dung trên nền tảng.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              2. Thông tin chúng tôi thu thập
            </h2>
            <p className="mb-2">Chúng tôi chỉ thu thập các nhóm thông tin tối thiểu cần thiết để vận hành nền tảng:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Thông tin tài khoản</span>: email, tên hiển thị hoặc nickname, mật khẩu
                (được lưu trữ ở dạng mã hóa).
              </li>
              <li>
                <span className="font-semibold">Nội dung do bạn tạo</span>: review, đánh giá, bình luận và các thông tin
                khác mà bạn chủ động đăng lên.
              </li>
              <li>
                <span className="font-semibold">Thông tin kỹ thuật cơ bản</span>: một số dữ liệu như địa chỉ IP, loại
                trình duyệt, thời gian truy cập, url trang… có thể được ghi nhận trong log hệ thống để phục vụ bảo mật
                và vận hành.
              </li>
            </ul>
            <p className="mt-2">
              Chúng tôi không cố ý thu thập thông tin nhạy cảm (ví dụ: số CMND/CCCD, tài khoản ngân hàng, thông tin sức
              khỏe...). Vui lòng không tự ý chia sẻ những thông tin này trong review hoặc bình luận.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              3. Mục đích sử dụng thông tin
            </h2>
            <p className="mb-2">Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Tạo, duy trì và quản lý tài khoản người dùng trên Review Course.</li>
              <li>Hiển thị tên hiển thị/ nickname kèm theo review và bình luận mà bạn đăng.</li>
              <li>Ngăn chặn hành vi spam, lạm dụng hoặc các hành vi vi phạm Điều khoản sử dụng.</li>
              <li>Cải thiện trải nghiệm người dùng, tối ưu giao diện và tính năng của website.</li>
              <li>
                Liên hệ với bạn trong trường hợp cần làm rõ nội dung, xử lý khiếu nại hoặc thông báo về thay đổi quan trọng
                liên quan đến nền tảng.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              4. Thời gian lưu trữ dữ liệu
            </h2>
            <p className="mb-2">
              Chúng tôi lưu trữ thông tin cá nhân của bạn trong thời gian cần thiết để đáp ứng các mục đích nêu trên, trừ
              khi pháp luật yêu cầu hoặc cho phép thời gian lưu trữ dài hơn.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Thông tin tài khoản thường được lưu trữ cho đến khi bạn yêu cầu xóa tài khoản hoặc khi dự án Review Course
                chấm dứt hoạt động.
              </li>
              <li>
                Một số bản sao lưu kỹ thuật (backup) có thể tồn tại thêm trong một khoảng thời gian hợp lý trước khi bị
                ghi đè.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              5. Chia sẻ thông tin với bên thứ ba
            </h2>
            <p className="mb-2">
              Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết{" "}
              <span className="font-semibold">không bán hoặc cho thuê</span> thông tin cá nhân cho bên thứ ba.
            </p>
            <p className="mb-2">Trong một số trường hợp hạn chế, dữ liệu có thể được chia sẻ khi:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Tuân thủ yêu cầu của cơ quan nhà nước có thẩm quyền, theo quy định của pháp luật hiện hành (ví dụ: điều
                tra, xử lý vi phạm).
              </li>
              <li>
                Bảo vệ quyền, tài sản hợp pháp và an toàn của Review Course, của người dùng khác hoặc của cộng đồng.
              </li>
              <li>
                Với nhà cung cấp dịch vụ kỹ thuật (ví dụ: đơn vị cung cấp hạ tầng máy chủ, dịch vụ email) trong phạm vi
                cần thiết để hệ thống hoạt động, và các bên này có cam kết bảo mật tương đương.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              6. Quyền của người dùng
            </h2>
            <p className="mb-2">
              Tùy theo khả năng kỹ thuật và quy định pháp luật, bạn có thể thực hiện một số quyền sau đối với dữ liệu cá
              nhân của mình:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Xem và cập nhật một số thông tin tài khoản cơ bản.</li>
              <li>Yêu cầu hỗ trợ chỉnh sửa thông tin nếu phát hiện sai sót.</li>
              <li>
                Yêu cầu xóa tài khoản hoặc một phần dữ liệu cá nhân, trong phạm vi mà hệ thống cho phép và không trái với
                nghĩa vụ lưu trữ theo pháp luật (nếu có).
              </li>
            </ul>
            <p className="mt-2">
              Để thực hiện các quyền này, bạn có thể liên hệ với chúng tôi qua email hỗ trợ được nêu ở cuối trang.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              7. Bảo mật thông tin
            </h2>
            <p className="mb-2">
              Chúng tôi áp dụng các biện pháp hợp lý để bảo vệ thông tin cá nhân khỏi truy cập trái phép, mất mát hoặc
              lạm dụng, ví dụ:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Mật khẩu người dùng được lưu trữ ở dạng mã hóa, không lưu dưới dạng văn bản thuần.</li>
              <li>Hạn chế quyền truy cập nội bộ tới dữ liệu, chỉ cho phép những người thật sự cần thiết.</li>
            </ul>
            <p className="mt-2">
              Tuy nhiên, không có hệ thống nào an toàn tuyệt đối trên Internet. Bạn cũng có trách nhiệm tự bảo vệ tài
              khoản của mình (không chia sẻ mật khẩu, đăng xuất khi dùng máy công cộng, v.v.).
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              8. Cookie và các công nghệ tương tự
            </h2>
            <p className="mb-2">
              Review Course có thể sử dụng cookie hoặc cơ chế tương tự để ghi nhớ phiên đăng nhập, giúp bạn không phải
              đăng nhập lại nhiều lần và cải thiện trải nghiệm sử dụng.
            </p>
            <p>
              Trong giai đoạn hiện tại, chúng tôi không tích hợp các công cụ phân tích hành vi phức tạp. Nếu trong tương
              lai có sử dụng thêm các dịch vụ phân tích hoặc theo dõi (ví dụ: Google Analytics), chúng tôi sẽ cập nhật lại
              phần này trong Chính sách bảo mật để giải thích rõ loại cookie và mục đích sử dụng.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              9. Cập nhật Chính sách bảo mật
            </h2>
            <p className="mb-2">
              Chúng tôi có thể sửa đổi hoặc cập nhật Chính sách bảo mật này theo thời gian để phù hợp với tính năng mới
              hoặc yêu cầu pháp lý.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Phiên bản mới sẽ được công bố trên trang này kèm{" "}
                <span className="font-semibold">ngày cập nhật</span>.
              </li>
              <li>
                Việc bạn tiếp tục sử dụng Review Course sau khi Chính sách được cập nhật đồng nghĩa với việc bạn đã đọc
                và đồng ý với phiên bản mới.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-base font-semibold text-[var(--color-text)] md:text-lg">
              10. Liên hệ
            </h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi, góp ý hoặc yêu cầu nào liên quan đến Chính sách bảo mật hoặc dữ liệu cá nhân của
              mình, vui lòng liên hệ đội ngũ Review Course qua email:{" "}
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
            Chính sách bảo mật này mang tính chất tham khảo và có thể được điều chỉnh, bổ sung trong tương lai khi Review
            Course phát triển thêm tính năng mới hoặc tích hợp các dịch vụ của bên thứ ba.
          </p>
        </section>
      </main>
    </div>
  );
}

