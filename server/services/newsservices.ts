import { promiseImpl } from "ejs";
import sql from "./db";

export interface News{
    id: number;
    title: string;
    author: string;
    category: string;
    published_date: string;
    status: string;
    summary: string;
    content: string;
    created_at: string;
    updated_at: string;
}

//functie maken die alle nieuwsartikelen gaat ophalen...
export async function getAllNews(): Promise<News[]>{
    const data: News[] = await sql `SELECT * FROM news_articles `;
    return data;
}

//functie maken die ervoor zorgt als we klikken op de bewerk knop dat we alle data krijgen van 1 news bestand
export async function getOneArticle(id:number): Promise<News>{
    const data: News[] = await sql `SELECT * FROM news_articles WHERE id= ${id} `;
    return data[0];
}

export async function SaveArticle(id:number, data:any): Promise<void> {
    await sql `    UPDATE news_articles
    SET
      title = ${data.title},
      author = ${data.author},
      category = ${data.category},
      published_date = ${data.published_date},
      status = ${data.status},
      summary = ${data.summary},
      content = ${data.content},
      updated_at = NOW()
    WHERE id = ${data.id}`
}