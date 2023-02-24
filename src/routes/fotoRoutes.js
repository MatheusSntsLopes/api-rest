import { Router } from 'express';
import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, fotoController.store);

export default router;
