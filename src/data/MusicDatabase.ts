import {BaseDatabase} from "./BaseDatabase";
import {Music, toMusicModel} from "../entities/Music";

export class MusicDatabase extends BaseDatabase {
    private static TABLE_NAME = "PROJETO_FULLSTACK_MUSIC"
    private static SECONDARY_TABLE_NAME = "PROJETO_FULLSTACK_MUSIC_GENRES"

    async insertMusic(music: Music) {
        try {
            await this
                .connection(MusicDatabase.SECONDARY_TABLE_NAME)
                .insert({genre: music.genre})

            let genre: number = await this.getGenreId(music.genre)

            await this
                .connection(MusicDatabase.TABLE_NAME)
                .insert({
                    id: music.id,
                    title: music.title,
                    author: music.author,
                    date: music.date,
                    file: music.file,
                    genre,
                    album: music.album
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getAllMusics(): Promise<Music> {
        try {
            const queryResult = await this.connection.raw(`
                SELECT M.id, title, author, album, date, file, G.genre
                FROM PROJETO_FULLSTACK_MUSIC M
                LEFT JOIN PROJETO_FULLSTACK_MUSIC_GENRES G ON G.id = M.genre`)

            return queryResult[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getSpecificMusic(title: string): Promise<Music> {
        try {
            const queryResult = await this.connection
                .select("*")
                .from(MusicDatabase.TABLE_NAME)
                .where({title})

            return toMusicModel(queryResult[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getGenreId(genre: string[]): Promise<number> {
        try {
            const result: any = await this.connection.raw(`
                SELECT id
                FROM PROJETO_FULLSTACK_MUSIC_GENRES
                where genre = "${genre}"
            `)

            return (result[0][0].id)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}