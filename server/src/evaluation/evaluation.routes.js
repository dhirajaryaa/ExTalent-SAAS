import {Router} from 'express';
import authChecker from '../middlewares/auth.middleware.js'
import { profileGithubEvaluate, profileResumeEvaluate } from './evaluation.controller.js';

const router = Router();

// resume parser - protected routes 
router.get("/resume",authChecker,profileResumeEvaluate)
// github parser - protected routes 
router.get("/github",authChecker,profileGithubEvaluate)

export default router;