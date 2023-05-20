export enum CourseEndpoints {
  GetCourses = '/courses/all',
  AddCourse = '/courses/add-course',
  GetCourseById = '/courses/get-course',
}

export interface Course {
  _id: string;
  name: string;
  description: string;
  link?: string;
}

export type GetCourseByIdRequest = Course['_id'];
export type GetCourseByIdResponse = Course;

export type CourseResponse = Course[];

export type AddCourseRequest = Omit<Course, 'id'>;

export interface AddCourseResponse {
  message: string;
}
