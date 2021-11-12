import { Request, Response, NextFunction } from 'express'
import { UserDocument } from '../models/User'
import jwt from 'jsonwebtoken'
//import LoginService from '../services/login'
import { BadRequestError } from '../helpers/apiError'
import { JWT_SECRET } from '../util/secrets'

export const googleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.user as UserDocument
  console.log('data', userData)

  const token = jwt.sign(userData.toJSON(), JWT_SECRET, { expiresIn: '2h' })
  console.log('user', userData)
  //generate jwt token and give it back to the user
  res.json(token)
}

//the rest of the things should be here and then we need to create a jwt strategy as well
// in the passport.ts.
