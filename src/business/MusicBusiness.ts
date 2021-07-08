import {Music, MusicDTO, SearchDTO} from "../entities/Music";
import {IdGenerator} from "../services/idGenerator";
import {MusicDatabase} from "../data/MusicDatabase";
import {TokenManager} from "../services/authenticator";

export class MusicBusiness {

    async addMusic(input: MusicDTO) {
        try {
            const token = new TokenManager()
            const result = token.getTokenData(input.token)

            if (!result) {
                throw new Error("Invalid credentials")
            }

            if (!input.title || !input.album || !input.file || !input.author || !input.genre) {
                throw new Error("Fields 'email' and 'password' are required.")
            }

            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()

            const date: Date = new Date(Date.now())

            const music: Music = {
                id,
                title: input.title,
                author: input.author,
                date,
                file: input.file,
                genre: input.genre,
                album: input.album
            }

            await new MusicDatabase().insertMusic(music)

        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getAllMusics() {
        try {
            const music: Music = await new MusicDatabase().getAllMusics()

            return music
        } catch(error) {
            throw new Error(error.message)
        }
    }

    async getSpecificMusic(title: string) {
        try {
            const music: Music = await new MusicDatabase().getSpecificMusic(title)

            if (!music) {
                throw new Error("Music could not be found.")
            }

            return music
        } catch(error) {
            throw new Error(error.message)
        }
    }
}