import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', academicSemesterController.getAllSemester);
router.get('/:id', academicSemesterController.getDataById);
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.create),
  academicSemesterController.insertSemester
);

export const AcademicSemesterRoutes = router;
