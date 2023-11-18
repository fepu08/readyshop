import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import User from '../schemas/userSchema';
import { setUpJwtCookie } from '../utils';
import { ExtendedRequest } from '../models/ExtendedRequest';
import { NotAuthorizedError } from '../errors/NotAuthorizedError';
import { UserNotFoundError } from '../errors/UserNotFoundError';
export default class UserController {
  /**
   * @desc 		Auth user & get token
   * @route 	POST /api/users/login
   * @access 	Public
   */
  static authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      res.status(401);
      throw new Error('Invalid email or password');
    }

    setUpJwtCookie(user._id, res);

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    }
  });

  /**
   * @desc 		Register user
   * @route 	POST /api/users/register
   * @access 	Public
   */
  static registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      res.status(400);
      throw new Error('Invalid user data');
    }

    setUpJwtCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  });

  /**
   * @desc 		Logout user / clear cookie
   * @route 	POST /api/users/logout
   * @access 	Private
   */
  static logoutUser = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      maxAge: 0,
    });

    res.status(200).json({ message: 'Logged out successfully' });
  });

  /**
   * @desc 		Get user profile
   * @route 	GET /api/users/profile
   * @access 	Private
   */
  static getUserProfile = asyncHandler(async (req: ExtendedRequest, res: Response) => {
    if (!req.user) {
      throw new NotAuthorizedError();
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404);
      throw new UserNotFoundError();
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  });

  /**
   * @desc 		Update user profile
   * @route 	UPDATE /api/users/profile
   * @access 	Private
   */
  static updateUserProfile = asyncHandler(async (req: ExtendedRequest, res: Response) => {
    if (!req.user) {
      throw new NotAuthorizedError();
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404);
      throw new UserNotFoundError();
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  });

  /**
   * @desc 		Get users
   * @route 	GET /api/users
   * @access 	Private/Admin
   */
  static getUsers = asyncHandler(async (req: Request, res: Response) => {
    res.send('get users');
  });

  /**
   * @desc 		Delete users
   * @route 	DELETE /api/users/:id
   * @access 	Private/Admin
   */
  static deleteUser = asyncHandler(async (req: Request, res: Response) => {
    res.send('delete user');
  });

  /**
   * @desc 		Get user by id
   * @route 	GET /api/users/:id
   * @access 	Private/Admin
   */
  static getUserById = asyncHandler(async (req: Request, res: Response) => {
    res.send('get user by id');
  });

  /**
   * @desc 		Update user by id
   * @route 	PUT /api/users/:id
   * @access 	Private/Admin
   */
  static updateUser = asyncHandler(async (req: Request, res: Response) => {
    res.send('update user');
  });
}
