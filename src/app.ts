import express, { Express, Request, Response } from "express";
import authRouter from "./routes/auth.route";

import { polyglotMiddleware } from "./middlewares/polyglot.middleware";
import { response } from "./constants/response";
import { status } from "./helpers/status";


const app: Express = express();

app.use(polyglotMiddleware);

app.get('/', (req: Request, res: Response) => {
    res.status(status.success).json({ type: "success", message: req.polyglot.t(response.HELLO_FROM_BACKEND) });
});

app.use("/api/auth", authRouter);

export default app;