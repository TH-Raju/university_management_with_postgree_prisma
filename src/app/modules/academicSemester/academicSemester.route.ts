import express from 'express';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post('/create-semester', academicSemesterController.insertSemester);

export const AcademicSemesterRoutes = router;
