export interface Education {
  id: string;
  school: string;
  degree: string;
  dateRange: string;
  note?: string;
}

export const education: Education[] = [
  {
    id: "ms",
    school: "University of Massachusetts Amherst",
    degree: "MS in Computer Science",
    dateRange: "Graduated May 2026",
  },
  {
    id: "bs",
    school: "University of Massachusetts Amherst",
    degree: "BS in Computer Science & Economics",
    dateRange: "Graduated December 2024",
    note: "3.9 GPA",
  },
];
