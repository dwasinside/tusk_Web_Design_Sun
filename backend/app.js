import express from 'express';
import { router as reviewsRouter } from './src/routes/reviewsRouter.js';

const app = express();

app.use(express.json());

// testimonial request
app.use('/reviews', reviewsRouter);
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
