import express, { Express, Request, Response, urlencoded } from "express";
import authRouter from "./routes/auth.route";

import { polyglotMiddleware } from "./middlewares/polyglot.middleware";
import { response } from "./constants/response";
import { status } from "./helpers/status";
import cors from "cors";
import userRouter from "./routes/user.route";


const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(polyglotMiddleware);

app.get('/', (req: Request, res: Response) => {
    res.status(status.success).json({ type: "success", message: req.polyglot.t(response.HELLO_FROM_BACKEND) });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

export default app;