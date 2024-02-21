// elements
let commands = JSON.parse(localStorage.getItem('commands'));
let commandsContainer = document.getElementById('commands');

checkComands();
// afficher les elements du panier
commands.forEach((command) => {
    let commandElem = document.createElement('div');
    commandElem.className = 'command-elem';
    commandElem.innerHTML = `
        <h3>Commande ID: ${command.command_id}</h3>
        <p>status: ${command.ok == true ? 'ok':'erreur'}</p>
    `;
    commandsContainer.appendChild(commandElem);
});

// verifier si le panier est vide
function checkComands() {
    let commands = localStorage.getItem('commands');
    if (commands === null || Object.keys(JSON.parse(commands)).length === 0) {
        commandsContainer.innerHTML = '<h2>Votre panier est vide</h2>';
    }
}
