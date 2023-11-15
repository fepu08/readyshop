import express from 'express';
import UserController from '../controllers/userController';

const userRouter = express.Router();

userRouter.route('/').post(UserController.registerUser).get(UserController.getUsers);
userRouter.post('/logout', UserController.logoutUser);
userRouter.post('/login', UserController.authUser);
userRouter.route('/profile').get(UserController.getUserProfile).put(UserController.updateUserProfile);
userRouter
  .route('/:id')
  .delete(UserController.deleteUser)
  .get(UserController.getUserById)
  .put(UserController.updateUser);

export default userRouter;
