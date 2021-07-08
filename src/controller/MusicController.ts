import {Request, Response} from "express";
import {MusicDTO} from "../entities/Music";
import {MusicBusiness} from "../business/MusicBusiness";

export class MusicController {
    addMusic = async (req: Request, res: Response) => {
        try {
            const {title, author, file, genre, album} = req.body

            const input: MusicDTO = {
                title: title,
                author: author,
                file: file,
                genre: genre,
                album: album
            }

            await new MusicBusiness().addMusic(input)

            res
                .status(201)
                .send("Song has been added.")
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getSpecificMusic = async (req: Request, res: Response) => {
        try {
            const title = req.query.title as string

            const musicBusiness = new MusicBusiness()
            const music = await musicBusiness.getSpecificMusic(title)

            res
                .status(201)
                .send({music})

        } catch (error) {
            throw new Error(error.message)
        }
    }

    getAllMusics = async (req: Request, res: Response) => {
        try {
            const musicBusiness = new MusicBusiness()
            const music = await musicBusiness.getAllMusics()

            res
                .status(201)
                .send({music})

        } catch (error) {
            res
                .status(400)
                .send(error.message)
        }
    }
}