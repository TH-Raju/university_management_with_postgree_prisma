import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { academicSemesterService } from './academicSemester.service';

const insertSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await academicSemesterService.insertSemester(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created!!',
    data: result,
  });
});

export const academicSemesterController = {
  insertSemester,
};
