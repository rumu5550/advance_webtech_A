import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): any {
    return {
      message: 'All courses fetched',
      data: [],
    };
  }

  getCourseById(id: string): any {
    return {
      message: 'Course fetched',
      id: id,
    };
  }

  createCourse(name: string, code: string): any {
    return {
      message: 'Course created',
      data: {
        name: name,
        code: code,
      },
    };
  }
}
