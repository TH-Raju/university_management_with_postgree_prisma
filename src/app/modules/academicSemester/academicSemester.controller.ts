import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicSemesterService } from './academicSemester.service';
import { AcademicSemesterFilterAbleFields } from './academicSemester.constants';

const insertSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await academicSemesterService.insertSemester(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created!!',
    data: result,
  });
});

const getAllSemester = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.query);
  const filters = pick(req.query, AcademicSemesterFilterAbleFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  console.log('filters', filters);
  console.log('options', options);
  const result = await academicSemesterService.getAllSemester(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Find!!',
    meta: result.meta,
    data: result.data,
  });
});

export const academicSemesterController = {
  insertSemester,
  getAllSemester,
};
