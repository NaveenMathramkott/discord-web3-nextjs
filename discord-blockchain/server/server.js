import express from "express";
import Gun from "gun";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(Gun.serve);

app.get("/", (_, res) => {
  res.status(200).send("=> Discord Node is Live");
});

const server = app.listen(port, () => {
  console.log(`=> Discord Node is listening at http://localhost:${port}`);
});

Gun({ web: server });
