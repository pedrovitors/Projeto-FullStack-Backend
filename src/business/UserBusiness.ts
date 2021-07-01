import {LoginInputDTO, SignupDTO, User} from "../entities/User";
import {IdGenerator} from "../services/idGenerator";
import {HashManager} from "../services/hashManager";
import {TokenManager} from "../services/authenticator";
import {UserDatabase} from "../data/UserDatabase";

export class UserBusiness {

    async signup(input: SignupDTO) {
        try {
            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()

            const hashManager = new HashManager()
            const cypherPassword = await hashManager.hash(input.password);

            const user: User = {
                id,
                name: input.name,
                email: input.email,
                nickname: input.nickname,
                password: cypherPassword
            }

            await new UserDatabase().insertUser(user)
            return new TokenManager().generateToken({id})


        } catch (error) {
            throw new Error(error.message)
        }
    }

    async login(input: LoginInputDTO): Promise<string> {
        try {

            const userDatabase = new UserDatabase()
            const user: User = await userDatabase.getUserByEmail(input.email)

            const hashManager = new HashManager()
            const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)

            const tokenManager = new TokenManager()
            return tokenManager.generateToken({
                id: user.id
            })

        } catch(error) {
            throw new Error(error.message)
        }
    }
}