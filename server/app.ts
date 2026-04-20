import express, { Application, Request, Response } from "express";
import path from "path";
import routes from "./routes";

const app: Application = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

//Routes importeren
app.use("/", routes);
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});