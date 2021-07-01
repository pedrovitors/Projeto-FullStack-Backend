import {app} from "./controller/app";
import {musicRouter} from "./routes/musicRouter";
import {imageRouter} from "./routes/imageRouter";
import {userRouter} from "./routes/userRouter";

app.use("/user", userRouter)
app.use("/music", musicRouter)
app.use("/image", imageRouter)