import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string): any {
    return {
      message: 'Notification sent',
      to: studentName,
      content: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string): any {
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: `Checking enrollment for ${studentName}`,
      result: enrollments,
    };
  }
}
