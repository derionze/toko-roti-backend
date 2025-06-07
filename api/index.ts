// api/index.ts
import { createNestApplication } from '../src/main';
import { Request, Response } from 'express';

let cachedApp: any;

export default async function handler(req: Request, res: Response) {
    if (!cachedApp) {
        const app = await createNestApplication();
        await app.init();
        cachedApp = app.getHttpAdapter().getInstance();
    }
    return cachedApp(req, res);
}
