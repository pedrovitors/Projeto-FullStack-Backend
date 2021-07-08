import {BaseDatabase} from "./BaseDatabase";
import {Music, toMusicModel} from "../entities/Music";

export class MusicDatabase extends BaseDatabase {
    private static TABLE_NAME = "PROJETO_FULLSTACK_MUSIC"

    async insertMusic(music: Music) {
        try {
            await this
                .connection(MusicDatabase.TABLE_NAME)
                .insert({
                    id: music.id,
                    title: music.title,
                    author: music.author,
                    date: music.date,
                    file: music.file,
                    genre: music.genre,
                    album: music.album
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getAllMusics(): Promise<Music> {
        try {
            return await this.connection
                .select("*")
                .from(MusicDatabase.TABLE_NAME)
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
}