import GAME_DATA from "../data/data.js";

const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Game List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1 style="font-size: 2.5rem;">My Game List</h1>
      </header>

      <main>
        <div class="search" style="text-align: center; margin-bottom: 60px">
            <input 
              type="search"
              name="search"
              placeholder="Search Games by Title"
              hx-post="/games/search"
              hx-trigger="keyup changed delay:300ms"
              hx-target=".game-list"
            />
        </div> 

        <div class="game-list">
            <button hx-get="/games"hx-target=".game-list">My Games</button>
          </div>

          <div class="add-game-form">
            <h2>What Do You Want to Play?</h2>
            <form 
              hx-post="/games" 
              hx-target=".game-list ul" 
              hx-swap="beforeend" 
              hx-on:htmx:after-request="document.querySelector('form').reset()"
              >
              <input type="text" name="title" placeholder="Game Title" required>
              <input type="text" name="author" placeholder="Author" required>
              <button>Add Game</button>
            </form>
          </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
