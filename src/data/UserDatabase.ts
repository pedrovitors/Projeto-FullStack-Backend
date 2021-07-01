import {BaseDatabase} from "./BaseDatabase";
import {toUserModel, User} from "../entities/User";

export class UserDatabase extends BaseDatabase {

    async insertUser(user: User) {
        try {
            await this
                .connection("PROJETO_FULLSTACK_USER")
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    nickname: user.nickname,
                    password: user.password
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserByEmail(email: string): Promise<User> {
        try {
            const queryResult: any = await this
                .connection("PROJETO_FULLSTACK_USER")
                .select("*")
                .where({email})

            return toUserModel(queryResult[0])

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}