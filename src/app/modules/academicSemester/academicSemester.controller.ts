import { AcademicSemester } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { academicSemesterService } from './academicSemester.service';

const insertSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await academicSemesterService.insertSemester(req.body);
    sendResponse<AcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Created!!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const academicSemesterController = {
  insertSemester,
};
