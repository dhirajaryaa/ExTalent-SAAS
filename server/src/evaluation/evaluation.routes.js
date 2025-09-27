import {Router} from 'express';
import authChecker from '../middlewares/auth.middleware.js'
import { profileResumeEvaluate } from './evaluation.controller.js';

const router = Router();

// resume parser - protected routes 
router.get("/resume",authChecker,profileResumeEvaluate)

export default router;