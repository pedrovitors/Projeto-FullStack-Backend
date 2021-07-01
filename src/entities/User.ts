export type User = {
    id: string
    name: string
    email: string
    nickname: string
    password: string
}
export type AuthenticationData = {
    id: string
}

export interface SignupDTO {
    name: string
    email: string
    nickname: string
    password: string
}

export interface LoginInputDTO {
    email: string
    password: string
}

export function toUserModel(obj: any): User {
    return obj && {
        id: obj.id,
        name: obj.name,
        email: obj.email,
        nickname: obj.nickname,
        password: obj.password
    }
}