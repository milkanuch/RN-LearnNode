export enum CourseEndpoints {
  GetCourses = '/courses/',
  AddCourse = '/courses/add-course',
  GetCourseById = '/courses/get',
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

export type AddCourseRequest = Omit<Course, '_id'>;

export interface AddCourseResponse {
  message: string;
}
