import { Router } from 'express';
import { api } from '../controllers/api.controller';

const Router = Router();

Router.use('/api', api);

export default Router;
