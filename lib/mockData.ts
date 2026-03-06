import type {
  Course,
  CourseReview,
  CourseCriteriaSummary,
  CourseCriterionKey,
  Criterion,
  Business,
  BusinessReview,
  BusinessCriteriaSummary,
  BusinessCriterionKey,
  BusinessCriterion,
} from "@/types";

// Course criteria (7 tiêu chí đánh giá môn học)

export const courseCriteria: Criterion[] = [
  { key: "difficulty", label: "Độ khó", options: [{ value: 1, label: "Dễ" }, { value: 2, label: "Trung bình" }, { value: 3, label: "Khó" }] },
  { key: "program_intensity", label: "Độ nặng của chương trình", options: [{ value: 1, label: "Nhẹ" }, { value: 2, label: "Vừa" }, { value: 3, label: "Nặng" }] },
  { key: "assignment_volume", label: "Khối lượng bài tập", options: [{ value: 1, label: "Ít" }, { value: 2, label: "Vừa" }, { value: 3, label: "Nhiều" }] },
  { key: "class_clarity", label: "Mức độ dễ hiểu khi học trên lớp", options: [{ value: 1, label: "Dễ hiểu" }, { value: 2, label: "Bình thường" }, { value: 3, label: "Khó theo kịp" }] },
  { key: "applicability", label: "Tính ứng dụng (có dùng được về sau không)", options: [{ value: 1, label: "Thấp" }, { value: 2, label: "Trung bình" }, { value: 3, label: "Cao" }] },
  { key: "exam_pressure", label: "Áp lực thi cử", options: [{ value: 1, label: "Nhẹ" }, { value: 2, label: "Vừa" }, { value: 3, label: "Cao" }] },
  { key: "self_study_time", label: "Mức độ tốn thời gian tự học", options: [{ value: 1, label: "Ít" }, { value: 2, label: "Vừa" }, { value: 3, label: "Nhiều" }] },
];

export const courses: Course[] = [
  { id: "1", code: "CS101", name: "Lập trình cơ bản", description: "Nhập môn lập trình với C/Java.", image: "https://picsum.photos/seed/course1/400/240" },
  { id: "2", code: "MATH101", name: "Giải tích 1", description: "Giới hạn, đạo hàm, tích phân.", image: "https://picsum.photos/seed/course2/400/240" },
  { id: "3", code: "CS201", name: "Cấu trúc dữ liệu & Giải thuật", description: "Các cấu trúc dữ liệu và thuật toán cơ bản.", image: "https://picsum.photos/seed/course3/400/240" },
  { id: "4", code: "DB101", name: "Cơ sở dữ liệu", description: "SQL, thiết kế CSDL.", image: "https://picsum.photos/seed/course4/400/240" },
  { id: "5", code: "WEB101", name: "Lập trình Web", description: "HTML, CSS, JavaScript, React.", image: "https://picsum.photos/seed/course5/400/240" },
  { id: "6", code: "SOFT201", name: "Kỹ nghệ phần mềm", description: "Quy trình phát triển phần mềm.", image: "https://picsum.photos/seed/course6/400/240" },
];

// Mock reviews: 5,2,4,3,2 style for one criterion; spread across courses
const courseReviewRatings = (courseId: string): CourseReview["ratings"] => {
  const keys: CourseCriterionKey[] = [
    "difficulty", "program_intensity", "assignment_volume", "class_clarity",
    "applicability", "exam_pressure", "self_study_time",
  ];
  return keys.map((criterionKey) => ({
    criterionKey,
    value: Math.floor(Math.random() * 3) + 1 as 1 | 2 | 3,
  }));
};

export const courseReviews: CourseReview[] = [
  { id: "r1", courseId: "1", reviewerName: "SV A", ratings: courseReviewRatings("1"), createdAt: "2025-01-10T10:00:00Z" },
  { id: "r2", courseId: "1", reviewerName: "SV B", ratings: courseReviewRatings("1"), createdAt: "2025-01-12T11:00:00Z" },
  { id: "r3", courseId: "1", ratings: courseReviewRatings("1"), createdAt: "2025-01-15T09:00:00Z" },
  { id: "r4", courseId: "1", reviewerName: "SV D", ratings: courseReviewRatings("1"), createdAt: "2025-02-01T14:00:00Z" },
  { id: "r5", courseId: "1", reviewerName: "SV E", ratings: courseReviewRatings("1"), createdAt: "2025-02-05T16:00:00Z" },
  { id: "r6", courseId: "2", reviewerName: "SV F", ratings: courseReviewRatings("2"), createdAt: "2025-01-20T10:00:00Z" },
  { id: "r7", courseId: "2", ratings: courseReviewRatings("2"), createdAt: "2025-01-22T12:00:00Z" },
  { id: "r8", courseId: "2", reviewerName: "SV H", ratings: courseReviewRatings("2"), createdAt: "2025-02-10T08:00:00Z" },
  { id: "r9", courseId: "3", reviewerName: "SV I", ratings: courseReviewRatings("3"), createdAt: "2025-02-01T10:00:00Z" },
  { id: "r10", courseId: "3", ratings: courseReviewRatings("3"), createdAt: "2025-02-03T11:00:00Z" },
  { id: "r11", courseId: "4", reviewerName: "SV K", ratings: courseReviewRatings("4"), createdAt: "2025-02-05T09:00:00Z" },
  { id: "r12", courseId: "5", reviewerName: "SV L", ratings: courseReviewRatings("5"), createdAt: "2025-02-08T14:00:00Z" },
  { id: "r13", courseId: "5", ratings: courseReviewRatings("5"), createdAt: "2025-02-09T10:00:00Z" },
  { id: "r14", courseId: "6", reviewerName: "SV N", ratings: courseReviewRatings("6"), createdAt: "2025-02-12T16:00:00Z" },
];

export function getCourseSummary(
  courseId: string,
  additionalReviews: CourseReview[] = []
): CourseCriteriaSummary[] {
  const reviews = [
    ...courseReviews.filter((r) => r.courseId === courseId),
    ...additionalReviews.filter((r) => r.courseId === courseId),
  ];
  if (reviews.length === 0) {
    return courseCriteria.map((c) => ({ criterionKey: c.key, average: 0, count: 0 }));
  }
  return courseCriteria.map((c) => {
    const values = reviews.flatMap((r) => {
      const rating = r.ratings.find((x) => x.criterionKey === c.key);
      return rating ? [rating.value] : [];
    });
    const sum = values.reduce((a, b) => a + b, 0);
    const count = values.length;
    return {
      criterionKey: c.key,
      average: count > 0 ? Math.round((sum / count) * 10) / 10 : 0,
      count,
    };
  });
}

// Business criteria (5 tiêu chí đánh giá doanh nghiệp)
const threeOptions = (low: string, mid: string, high: string): Criterion["options"] => [
  { value: 1, label: low },
  { value: 2, label: mid },
  { value: 3, label: high },
];
export const businessCriteria: BusinessCriterion[] = [
  { key: "work_env", label: "Môi trường làm việc", options: threeOptions("Kém", "Ổn", "Tốt") },
  { key: "mentorship", label: "Mức độ được mentor", options: threeOptions("Ít", "Vừa", "Nhiều") },
  { key: "learning", label: "Cơ hội học hỏi", options: threeOptions("Thấp", "TB", "Cao") },
  { key: "salary_fairness", label: "Mức lương/stipend hợp lý", options: threeOptions("Thấp", "TB", "Cao") },
  { key: "growth", label: "Cơ hội phát triển", options: threeOptions("Thấp", "TB", "Cao") },
];

export const businesses: Business[] = [
  { id: "b1", name: "FPT Software", description: "Công ty phần mềm lớn", industry: "IT", image: "https://picsum.photos/seed/biz1/400/240" },
  { id: "b2", name: "Viettel Solutions", description: "Giải pháp công nghệ", industry: "IT", image: "https://picsum.photos/seed/biz2/400/240" },
  { id: "b3", name: "Tiki", description: "Sàn thương mại điện tử", industry: "E-commerce", image: "https://picsum.photos/seed/biz3/400/240" },
  { id: "b4", name: "Grab Vietnam", description: "Công nghệ di chuyển", industry: "Tech", image: "https://picsum.photos/seed/biz4/400/240" },
  { id: "b5", name: "VNG Corporation", description: "Công ty internet & game", industry: "IT", image: "https://picsum.photos/seed/biz5/400/240" },
];

const businessReviewRatings = (businessId: string): BusinessReview["ratings"] =>
  businessCriteria.map((c) => ({
    criterionKey: c.key,
    value: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
  }));

export const businessReviews: BusinessReview[] = [
  { id: "br1", businessId: "b1", reviewerName: "SV X", ratings: businessReviewRatings("b1"), createdAt: "2025-01-15T10:00:00Z" },
  { id: "br2", businessId: "b1", ratings: businessReviewRatings("b1"), createdAt: "2025-02-01T11:00:00Z" },
  { id: "br3", businessId: "b2", reviewerName: "SV Y", ratings: businessReviewRatings("b2"), createdAt: "2025-01-20T09:00:00Z" },
  { id: "br4", businessId: "b3", reviewerName: "SV Z", ratings: businessReviewRatings("b3"), createdAt: "2025-02-05T14:00:00Z" },
  { id: "br5", businessId: "b4", ratings: businessReviewRatings("b4"), createdAt: "2025-02-10T16:00:00Z" },
  { id: "br6", businessId: "b5", reviewerName: "SV W", ratings: businessReviewRatings("b5"), createdAt: "2025-02-12T08:00:00Z" },
];

export function getBusinessSummary(
  businessId: string,
  additionalReviews: BusinessReview[] = []
): BusinessCriteriaSummary[] {
  const reviews = [
    ...businessReviews.filter((r) => r.businessId === businessId),
    ...additionalReviews.filter((r) => r.businessId === businessId),
  ];
  if (reviews.length === 0) {
    return businessCriteria.map((c) => ({ criterionKey: c.key, average: 0, count: 0 }));
  }
  return businessCriteria.map((c) => {
    const values = reviews.flatMap((r) => {
      const rating = r.ratings.find((x) => x.criterionKey === c.key);
      return rating ? [rating.value] : [];
    });
    const sum = values.reduce((a, b) => a + b, 0);
    const count = values.length;
    return {
      criterionKey: c.key,
      average: count > 0 ? Math.round((sum / count) * 10) / 10 : 0,
      count,
    };
  });
}
