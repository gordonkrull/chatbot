import { Express, Request, Response, Router } from 'express';
import getChatMessages from '../chatMessages/getChatMessages';

var router = Router();

router.get('/', async (req, res, next) => {
    res.send(await getChatMessages());
});

module.exports = router;