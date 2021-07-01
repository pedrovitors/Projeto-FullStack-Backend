import express from "express";

export const musicRouter = express.Router()
const musicController = new MusicController

musicRouter.post("/add", musicController.addMusic)

musicRouter.get("/", musicController.getAllMusics)

musicRouter.get("/:id", musicController.getSpecificMusic)
