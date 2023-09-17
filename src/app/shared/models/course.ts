export interface Course {
  urlImg: string;
  title: string;
  description: string;
  duration: number;
  nbrCourses: number;
  nbrEtudiants?: number | 0;
  rate?: number | null;
}
