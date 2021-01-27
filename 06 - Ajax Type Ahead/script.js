const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)  // returns a Promise
    .then(blob => blob.json())  // if receives Promise, return blob.json()
    .then(data => cities.push(...data));
    // if receives Promise, data = blob.json(), spread (...) data array into cities

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        // global (all possible matches in string) and case insensitive
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const displayHTML = matchArray.map(place => {
        // add .hl to highlight matched letters
        const regex = new RegExp(this.value, 'gi');
        console.log(this.value);
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${parseInt(place.population).toLocaleString()}</span>
            </li>
        `;
        // toLocaleString() adds thousand separator
    }).join('');
    suggestions.innerHTML = displayHTML;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);  // Fires when the user releases a key