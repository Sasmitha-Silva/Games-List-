const createEditFormTemplate = (game) => /*html*/ `
  <form hx-put="/games/${game.id}" hx-target="closest li" hx-swap="outerHTML">
    <input 
      name="title"
      placeholder="Game Title" 
      type="text" 
      value="${game.title}" 
    />
    <input 
      name="author"
      placeholder="Author" 
      type="text" 
      value="${game.author}" 
    />
    <button>Confirm</button>
  </form>
`;

export default createEditFormTemplate;
