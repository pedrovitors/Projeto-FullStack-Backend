import {Request, Response} from "express";
import {LoginInputDTO, SignupDTO} from "../entities/User";
import {UserBusiness} from "../business/UserBusiness";

export class UserController {

    signup = async (req: Request, res: Response) => {
        try {
            const {name, email, nickname, password} = req.body;

            const input: SignupDTO = {
                name: name,
                email: email,
                nickname: nickname,
                password: password,
            }

            const token = await new UserBusiness().signup(input)

            res
                .status(201)
                .send({token})
        } catch (error) {
            res
                .status(400)
                .send(error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body

            const input: LoginInputDTO = {
                email: email,
                password: password
            }

            const token = await new UserBusiness().login(input)

            res
                .status(200)
                .send({token})
        } catch (error) {
            res
                .status(400)
                .send(error.message)
        }
    }

}
