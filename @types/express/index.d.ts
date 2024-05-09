import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            polyglot: any;
        }
    }
}