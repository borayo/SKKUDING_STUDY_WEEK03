import { pokemonData } from './pokemon.js';
const raw = localStorage.getItem("selectedPokemon");
if (raw) {
    const pokemon = JSON.parse(raw);
    const index = pokemonData.findIndex((p) => p.name === pokemon.name);
    const image = document.getElementById("pokemon-image");
    const id = document.getElementById("id");
    const name = document.getElementById("name");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const types = document.getElementById("types");
    const baseExp = document.getElementById("base-Experience");
    const abilities = document.getElementById("abilities");
    const hp = document.getElementById("hp");
    const attack = document.getElementById("attack");
    const defense = document.getElementById("defense");
    const spAtk = document.getElementById("special-attack");
    const spDef = document.getElementById("special-defense");
    const speed = document.getElementById("speed");
    if (image &&
        id &&
        name &&
        height &&
        weight &&
        types &&
        baseExp &&
        abilities &&
        hp &&
        attack &&
        defense &&
        spAtk &&
        spDef &&
        speed) {
        image.src = `./pokemon/${index + 1}.png`;
        id.textContent = (index + 1).toString();
        name.textContent = pokemon.name;
        height.textContent = pokemon.height;
        weight.textContent = pokemon.weight;
        types.textContent = pokemon.types.join(",");
        baseExp.textContent = pokemon["base-Experience"];
        abilities.textContent = pokemon.abilities.join(",");
        hp.textContent = pokemon.hp;
        attack.textContent = pokemon.attack;
        defense.textContent = pokemon.defense;
        spAtk.textContent = pokemon["special-attack"];
        spDef.textContent = pokemon["special-defense"];
        speed.textContent = pokemon.speed;
    }
    else {
        console.warn("⚠️ 일부 HTML 요소를 찾을 수 없습니다.");
    }
}
else {
    console.warn("⚠️ selectedPokemon이 localStorage에 없습니다.");
}
