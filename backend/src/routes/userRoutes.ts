import express from 'express';
import UserController from '../controllers/userController';
import { admin, protect } from '../middlewares/authMiddleware';

const userRouter = express.Router();

userRouter.route('/').post(UserController.registerUser).get(protect, admin, UserController.getUsers);
userRouter.post('/logout', UserController.logoutUser);
userRouter.post('/login', UserController.authUser);
userRouter.route('/profile').get(protect, UserController.getUserProfile).put(protect, UserController.updateUserProfile);
userRouter
  .route('/:id')
  .delete(protect, admin, UserController.deleteUser)
  .get(protect, admin, UserController.getUserById)
  .put(protect, admin, UserController.updateUser);

export default userRouter;
