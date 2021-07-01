import express from "express";

export const imageRouter = express.Router()
const imageController = new ImageController

imageRouter.post("/add", imageController.addImage)

imageRouter.get("/", imageController.getAllImages)

imageRouter.get("/:id", imageController.getSpecificImage)
