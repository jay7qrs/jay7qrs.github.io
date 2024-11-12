const gamesDiv = document.getElementById('games');
const numberOfGamesElement = document.getElementById('numberOfGames');
const batchSize = 10; // Number of games to load per scroll
const substring_length = 70;
let gamesCount = 0;
let loadedGamesCount = 0; // Track the count of games loaded so far

if (numberOfGamesElement){ numberOfGamesElement.innerHTML = Math.floor(game_json.length / 10) * 10; }
console.log(`There are ${game_json.length} games.`)

function loadGamesBatch() {
    if (gamesDiv && game_json) {
        const gamesToLoad = game_json.slice(loadedGamesCount, loadedGamesCount + batchSize);
        gamesToLoad.forEach((game) => {
            if (!game.listed){return}

            let img = "./images/thumbs/" + game.img;

            // Check if game.img is undefined or empty
            if (game.img === undefined || game.img === "") {
                img = "./images/placeholder.png";
            }
            
            let description = game.description.substring(0, substring_length) + "...";
            

            const smallBox = document.createElement('div');
            smallBox.classList.add('small-box');

            const link = document.createElement('a');
            link.href = `./game.html?game=${game.source}&type=${game.gameType}`

            const imgElement = document.createElement('img');
            imgElement.setAttribute('loading', 'lazy');
            imgElement.setAttribute('decoding', 'async');
            imgElement.setAttribute('src', img);

            const titleElement = document.createElement('h2');
            titleElement.textContent = game.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = description;

            smallBox.appendChild(imgElement);
            smallBox.appendChild(titleElement);
            smallBox.appendChild(descriptionElement);
            
            link.appendChild(smallBox)

            gamesDiv.appendChild(link);
        });
        loadedGamesCount += batchSize;
    }
}

function loadAllGamesInBatches() {
    let loaded = 0;
    const loadBatch = () => {
        if (loaded < 40) {
            loadGamesBatch();
            loaded++;
            setTimeout(loadBatch, 0);
        } else {
            allGameElements = document.querySelectorAll('.small-box');
        }
    };
    loadBatch();
}

// SEARCHING FUNCTIONALITY

let firstSearch = true;
let allGameElements = [];

function search() {
    // Load all games if it's the first search, in batches to reduce load time
    if (firstSearch) {
        loadAllGamesInBatches();
        firstSearch = false;
    }

    // Get the search value in lowercase
    const value = document.getElementById('gameSearch').value.toLowerCase();

    // If the search value is empty, unhide all elements and return early
    if (value === "") {
        allGameElements.forEach(element => element.hidden = false);
        return;
    }

    // Search through the .small-box elements and toggle visibility based on match
    allGameElements.forEach(element => {
        const text = element.innerHTML.toLowerCase();
        element.hidden = !text.includes(value);
    });
}

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") search();
});

//SEARCHING FUNCTIONALITY

let pathname = window.location.pathname

loadAllGamesInBatches();