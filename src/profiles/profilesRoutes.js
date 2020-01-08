import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('Profiles routes'));

export default router;
