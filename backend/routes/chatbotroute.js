import express from 'express';
import { Message } from '../controller/chatbotmessage.js';

const router = express.Router();

router.post("/message",Message)

export default router;
