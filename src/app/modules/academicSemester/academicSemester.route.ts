import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.create),
  academicSemesterController.insertSemester
);

export const AcademicSemesterRoutes = router;
