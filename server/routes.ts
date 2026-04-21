import express, { Request, Response } from "express";
import { News, SaveArticle, getAllNews, getOneArticle } from "./services/newsservices";
import { brotliDecompressSync } from "zlib";

const router = express.Router();


//GET REQUESTS
router.get("/", async (req: Request, res: Response): Promise<void> => {
  const news: News[] = await getAllNews();

  res.render("news", {
    title: "Nieuwsartikelen",
    News: news,
  });
});

router.get("/edit_news/:id", async (req: Request, res: Response): Promise<void> => {
  const id : number = parseInt(req.params.id as string);
  const article : News = await getOneArticle(id);
  res.render("edit_news", { Article:article, title: "Bewerken Artikelen" });
});



//POST REQUESTS
router.post("/edit_news/:id", (req: Request, res: Response): void => {
  const id : number = parseInt(req.params.id as string);
  const data = req.body;
  SaveArticle(id,data);
  res.redirect('/')
});
export default router;