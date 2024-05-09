import app from "./app";
import { connectDatabase } from "./config/db";
const PORT = 3000 || process.env.PORT;


connectDatabase();

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});