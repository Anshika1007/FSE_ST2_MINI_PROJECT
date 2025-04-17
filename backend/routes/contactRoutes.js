import express from 'express';
import { getContacts, addContacts } from '../controllers/contactController.js';

const router = express.Router();
router.post('/add', addContacts);
router.get('/get', getContacts);


export default router;

