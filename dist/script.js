import { pokemonData } from './pokemon.js';
const container = document.getElementById('card-container');
if (container) {
    pokemonData.map((pokemon, index) => {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = `detail.html`;
        const imageDiv = document.createElement('div');
        imageDiv.className = 'card-image';
        const img = document.createElement('img');
        img.src = `./pokemon/${index + 1}.png`;
        imageDiv.appendChild(img);
        const textDiv = document.createElement('div');
        textDiv.className = 'card-text';
        const name = document.createElement('h2');
        name.textContent = pokemon.name;
        textDiv.appendChild(name);
        const height = document.createElement('p');
        height.textContent = `Height: ${pokemon.height}`;
        textDiv.appendChild(height);
        const weight = document.createElement("p");
        weight.textContent = `Weight: ${pokemon.weight} hg`;
        textDiv.appendChild(weight);
        const types = document.createElement("p");
        types.textContent = `Types: ${pokemon.types.join(", ")}`;
        textDiv.appendChild(types);
        card.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("selectedPokemon", JSON.stringify(pokemon));
            window.location.href = card.href;
        });
        card.appendChild(imageDiv);
        card.appendChild(textDiv);
        container.appendChild(card);
    });
}
else {
    console.warn("'card-container' 요소가 존재하지 않습니동...");
}
