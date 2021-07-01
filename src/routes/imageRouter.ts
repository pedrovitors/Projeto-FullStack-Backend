import express from "express";

export const imageRouter = express.Router()
const imageController = new ImageController

imageController.post("/add", ImageController.addImage)

imageController.get("/", ImageController.getAllImages)

imageController.get("/:id", ImageController.getSpecificImage)
