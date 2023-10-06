import express from 'express';
import { getReviews } from '../controllers/getReviews.js';

export const router = express.Router();
router.get('/', getReviews);
