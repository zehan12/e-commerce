import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

const config: any = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    db: {
        url: process.env.MONGO_URI,
        password: process.env.DATABASE_PASSWORD
    },
    jwt: {
        accessToken: {
            secret: process.env.ACCESS_TOKEN_SECRET,
            expiry: process.env.ACCESS_TOKEN_EXPIRY
        },
        refreshToken: {
            secret: process.env.REFRESH_TOKEN_SECRET,
            expiry: process.env.REFRESH_TOKEN_EXPIRY
        }
    }
}

export default config;