import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/news.html"));
});

//route voor edit pagina
router.get("/edit_news", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/edit_news.html"));
});


export default router;