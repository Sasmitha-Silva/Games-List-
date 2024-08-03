import express from "express";
import createHomepageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import GAME_DATA from "./data/data.js";
import createGameTemplate from "./views/game.js";
import createEditFormTemplate from "./views/edit.js";

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.send(createHomepageTemplate());
});

app.get("/games", (req, res) => {
  res.send(createListTemplate(GAME_DATA));
});

app.post("/games", (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();

  GAME_DATA.push({ id, title, author });

  res.redirect("/games/" + id);
});

app.get("/games/:id", (req, res) => {
  const { id } = req.params;
  const game = GAME_DATA.find((g) => g.id === id);

  res.send(createGameTemplate(game));
});

app.delete("/games/:id", (req, res) => {
  const id = req.params.id;
  const index = GAME_DATA.findIndex((g) => g.id === id);
  GAME_DATA.splice(index, 1);

  res.send();
});

app.get("/games/edit/:id", (req, res) => {
  const game = GAME_DATA.find((g) => g.id === req.params.id);
  res.send(createEditFormTemplate(game));
});

app.put("/games/:id", (req, res) => {
  const { title, author } = req.body;
  const { id } = req.params;

  const newGame = { title, author, id };

  const index = GAME_DATA.findIndex((g) => g.id === id);
  GAME_DATA[index] = newGame;

  res.send(createGameTemplate(newGame));
});

app.post("/games/search", (req, res) => {
  const text = req.body.search.toLowerCase();
  console.log(text);

  res.send(
    createListTemplate(
      GAME_DATA.filter((g) => g.title.toLowerCase().includes(text))
    )
  );
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
