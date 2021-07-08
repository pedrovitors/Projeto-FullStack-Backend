import express from "express";
import {MusicController} from "../controller/MusicController";

export const musicRouter = express.Router()
const musicController = new MusicController

musicRouter.post("/add", musicController.addMusic)

musicRouter.get("/", musicController.getAllMusics)

musicRouter.get("/musictitle", musicController.getSpecificMusic)
