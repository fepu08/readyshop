import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import User from '../schemas/userSchema';

export default class UserController {
  /**
   * @desc 		Auth user & get token
   * @route 	POST /api/users/login
   * @access 	Public
   */
  static authUser = asyncHandler(async (req: Request, res: Response) => {
    res.send('auth user');
  });

  /**
   * @desc 		Register user
   * @route 	POST /api/users/register
   * @access 	Public
   */
  static registerUser = asyncHandler(async (req: Request, res: Response) => {
    res.send('register user');
  });

  /**
   * @desc 		Logout user / clear cookie
   * @route 	POST /api/users/logout
   * @access 	Private
   */
  static logoutUser = asyncHandler(async (req: Request, res: Response) => {
    res.send('log out');
  });

  /**
   * @desc 		Get user profile
   * @route 	GET /api/users/profile
   * @access 	Private
   */
  static getUserProfile = asyncHandler(async (req: Request, res: Response) => {
    res.send('get user profile');
  });

  /**
   * @desc 		Update user profile
   * @route 	UPDATE /api/users/profile
   * @access 	Private
   */
  static updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
    res.send('update user profile');
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
