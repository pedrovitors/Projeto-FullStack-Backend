export type Music = {
    id: string
    title: string
    author: string
    date: Date
    file: string
    genre: string[]
    album: string
}

export interface MusicDTO {
    token: string
    title: string
    author: string
    file: string
    genre: string[]
    album: string
}

export interface SearchDTO {
    id: string
}

export function toMusicModel(obj: any): Music {
    return obj && {
        id: obj.id,
        title: obj.title,
        author: obj.author,
        date: obj.date,
        file: obj.file,
        genre: obj.genre,
        album: obj.album
    }
}