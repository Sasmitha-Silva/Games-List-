const createGameTemplate = (game) => /*html*/ `
    <li data-id="${game.id}">
        <div class="details" hx-get="games/edit/${game.id}" hx-target="closest li">
            <h3>${game.title}</h3>
            <p>${game.author}</p>
        </div>
        <button 
            hx-delete="/games/${game.id}" 
            hx-target="closest li" 
            hx-swap="outerHTML"
            >Delete</button>
    </li>
`;

export default createGameTemplate;
