import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses(): any {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string): any {
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse(@Body('name') name: string, @Body('code') code: string): any {
    return this.courseService.createCourse(name, code);
  }
}
