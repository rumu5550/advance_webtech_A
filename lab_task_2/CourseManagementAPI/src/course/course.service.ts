import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  getAllCourses(): any {
    return {
      message: 'All courses fetched successfully',
      data: [],
    };
  }

  getCourseById(id: string): any {
    return {
      message: 'Course fetched successfully',
      id: id,
    };
  }

  createCourse(dto: CreateCourseDto): any {
    return {
      message: 'Course created successfully',
      data: dto,
    };
  }

  updateCourse(id: string, dto: UpdateCourseDto): any {
    return {
      message: 'Course updated successfully',
      id: id,
      data: dto,
    };
  }

  patchCourse(id: string, dto: UpdateCourseDto): any {
    return {
      message: 'Course patched successfully',
      id: id,
      updatedFields: Object.keys(dto),
    };
  }

  deleteCourse(id: string): any {
    return {
      message: 'Course deleted successfully',
      id: id,
    };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File): any {
    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: file.path,
    };
  }
}
