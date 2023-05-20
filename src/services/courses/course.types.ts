export enum CourseEndpoints {
  GetCourses = '/courses/all',
}

export interface Course {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export interface CourseResponse {
  course: Course[];
}
