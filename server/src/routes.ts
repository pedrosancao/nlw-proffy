import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  return response.send('Proffy API v0.0.1-alpha');
});

export default router;
