import createGameTemplate from "./game.js";

const createListTemplate = (games) => /*html*/ `
    <ul>
        ${games.map((game) => createGameTemplate(game)).join("")}
    </ul>
`;

export default createListTemplate;
