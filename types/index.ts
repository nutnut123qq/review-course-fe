// Course review criteria keys (7 criteria)
export const COURSE_CRITERIA_KEYS = [
  "difficulty",
  "program_intensity",
  "assignment_volume",
  "class_clarity",
  "applicability",
  "exam_pressure",
  "self_study_time",
] as const;

export type CourseCriterionKey = (typeof COURSE_CRITERIA_KEYS)[number];

export interface CriterionOption {
  value: number;
  label: string;
}

export interface Criterion {
  key: CourseCriterionKey;
  label: string;
  options: CriterionOption[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  description?: string;
  image?: string;
}

export interface CourseReview {
  id: string;
  courseId: string;
  reviewerName?: string;
  ratings: { criterionKey: CourseCriterionKey; value: number }[];
  createdAt: string;
}

export interface CourseCriteriaSummary {
  criterionKey: CourseCriterionKey;
  average: number;
  count: number;
}

// Business (Tab 2) - same structure, can reuse criteria or define separate
export const BUSINESS_CRITERIA_KEYS = [
  "work_env",
  "mentorship",
  "learning",
  "salary_fairness",
  "growth",
] as const;

export type BusinessCriterionKey = (typeof BUSINESS_CRITERIA_KEYS)[number];

export interface BusinessCriterion {
  key: BusinessCriterionKey;
  label: string;
  options: CriterionOption[];
}

export interface Business {
  id: string;
  name: string;
  description?: string;
  industry?: string;
  image?: string;
}

export interface BusinessReview {
  id: string;
  businessId: string;
  reviewerName?: string;
  ratings: { criterionKey: BusinessCriterionKey; value: number }[];
  createdAt: string;
}

export interface BusinessCriteriaSummary {
  criterionKey: BusinessCriterionKey;
  average: number;
  count: number;
}
