import Polyglot from "node-polyglot";
import { TODO } from "../types/custom";
import { translations } from "../i18n/translations";
import { NextFunction, Request, Response } from "express";


let currentLanguage = "en";

let polyglot :Polyglot = new Polyglot({ phrases: translations[currentLanguage] });

export const polyglotMiddleware = (req: Request, res: Response, next: NextFunction) => {
    (req as Request & { polyglot: Polyglot }).polyglot  = polyglot as TODO;
    const acceptLanguage = req.header('Accept-Language');
    console.log(acceptLanguage,"lan")
    // Extract language code from Accept-Language header (e.g., "en-US,en;q=0.9,fr;q=0.8")
    const lang = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0] : null;
    if (lang && translations[lang]) {
        currentLanguage = lang;
        polyglot = new Polyglot({ phrases: translations[currentLanguage] });
    }
    console.log(polyglot.t("helloFromBackend"));
    next();
}