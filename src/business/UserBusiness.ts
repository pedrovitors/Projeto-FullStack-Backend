import {LoginInputDTO, SignupDTO, User} from "../entities/User"
import {IdGenerator} from "../services/idGenerator"
import {HashManager} from "../services/hashManager"
import {TokenManager} from "../services/authenticator"
import {UserDatabase} from "../data/UserDatabase"

export class UserBusiness {

    async signup(input: SignupDTO) {
        try {
            if (!input.name || !input.nickname || !input.email || !input.password) {
                throw new Error("Fields 'name', 'nickname', 'email' and 'password' are required.")
            }

            if (input.password.length < 6) {
                throw new Error ("Your password must have at least 6 digits.")
            }

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
            if (!input.email || !input.password) {
                throw new Error("Fields 'email' and 'password' are required.")
            }

            const userDatabase = new UserDatabase()
            const user: User = await userDatabase.getUserByEmail(input.email)

            if (!user) {
                throw new Error("Invalid credentials.")
            }

            const hashManager = new HashManager()
            const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)

            if (!passwordIsCorrect) {
                throw new Error("Invalid credentials.")
            }

            const tokenManager = new TokenManager()
            return tokenManager.generateToken({
                id: user.id
            })

        } catch(error) {
            throw new Error(error.message)
        }
    }
}