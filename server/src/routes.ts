import express from 'express';
import ClassesController from './controllers/ClassesController';

const router = express.Router();

router.get('/', (request, response) => {
  return response.send('Proffy API v0.0.1-alpha');
});

const classesController = new ClassesController();
router.get('/classes', classesController.index);
router.post('/classes', classesController.create);

export default router;
