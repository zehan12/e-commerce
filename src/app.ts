import express, { Express, Request, Response, urlencoded } from "express";
import { polyglotMiddleware } from "./middlewares/polyglot.middleware";
import { response } from "./constants/response";
import { status } from "./helpers/status";
import cors from "cors";
import { authRoute, testRoute, userRoute } from "./routes";



const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(polyglotMiddleware);

app.get('/', (req: Request, res: Response) => {
    res.status(status.success).json({ type: "success", message: req.polyglot.t(response.HELLO_FROM_BACKEND) });
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/testing", testRoute);

export default app;