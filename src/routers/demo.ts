import r from 'express';
import { Request, Response } from 'express';
import { pushTrigger, objectNotification } from '../controllers/demo';
import pubsubBodyParser from "../middlewares/pubsubBodyParser";
const router = r.Router();

// Health check endpoint
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    service: 'al-demo-service',
    timestamp: new Date().toISOString()
  });
});

router.post('/push-trigger', [pubsubBodyParser] , pushTrigger);

router.post('/object-notification', [pubsubBodyParser] , objectNotification);

export default router;
