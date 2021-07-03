import express from "express";
import {ImageController} from "../controller/ImageController";

export const imageRouter = express.Router()
const imageController = new ImageController

imageRouter.post("/add", imageController.addImage)

imageRouter.get("/", imageController.getAllImages)

imageRouter.get("/:id", imageController.getSpecificImage)
