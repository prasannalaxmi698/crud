import express from 'express';
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';
const router = express.Router();
router.get('/users', getUsers);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser);
// router.get('/user/:id', getUser);
export default router;
