const appsDiv = document.getElementById('apps');
const batchSize = 10; // Number of apps to load per scroll
const substring_length = 70;
let loadedAppsCount = 0; // Track the count of apps loaded so far

function loadAppsBatch() {
    if (appsDiv && app_json) {
        const appsToLoad = app_json.slice(loadedAppsCount, loadedAppsCount + batchSize);
        appsToLoad.forEach((app) => {
            if (!app.listed){return}

            let img = "./images/thumbs/" + app.img;

            // Check if app.img is undefined or empty
            if (app.img === undefined || app.img === "") {
                img = "./images/placeholder.png";
            }
            
            let description = app.description.substring(0, substring_length) + "...";
            

            const smallBox = document.createElement('div');
            smallBox.classList.add('small-box');

            const link = document.createElement('a');
            link.href = `./app.html?url=${app.url}`

            const imgElement = document.createElement('img');
            imgElement.setAttribute('loading', 'lazy');
            imgElement.setAttribute('decoding', 'async');
            imgElement.setAttribute('src', img);

            const titleElement = document.createElement('h2');
            titleElement.textContent = app.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = description;

            smallBox.appendChild(imgElement);
            smallBox.appendChild(titleElement);
            smallBox.appendChild(descriptionElement);
            
            link.appendChild(smallBox)

            appsDiv.appendChild(link);
        });
        loadedAppsCount += batchSize;
    }
}

function loadAllAppsInBatches() {
    let loaded = 0;
    const loadBatch = () => {
        if (loaded < 40) {
            loadAppsBatch();
            loaded++;
            setTimeout(loadBatch, 0);
        } else {
            allAppElements = document.querySelectorAll('.small-box');
        }
    };
    loadBatch();
}

// SEARCHING FUNCTIONALITY

let firstSearch = true;
let allAppElements = [];

function search() {
    // Load all games if it's the first search, in batches to reduce load time
    if (firstSearch) {
        loadAllAppsInBatches();
        firstSearch = false;
    }

    // Get the search value in lowercase
    const value = document.getElementById('appSearch').value.toLowerCase();

    // If the search value is empty, unhide all elements and return early
    if (value === "") {
        allAppElements.forEach(element => element.hidden = false);
        return;
    }

    // Search through the .small-box elements and toggle visibility based on match
    allAppElements.forEach(element => {
        const text = element.innerHTML.toLowerCase();
        element.hidden = !text.includes(value);
    });
}

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") search();
});

//SEARCHING FUNCTIONALITY

let pathname = window.location.pathname

loadAllAppsInBatches();