import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  getEnrollments(): any {
    return this.enrollmentService.getEnrollments();
  }

  @Post()
  enrollStudent(
    @Body('studentName') studentName: string,
    @Body('courseId') courseId: string,
  ): any {
    return this.enrollmentService.enrollStudent(studentName, courseId);
  }
}
