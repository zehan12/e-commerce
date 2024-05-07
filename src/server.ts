import app from "./app";
const PORT = 3000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});