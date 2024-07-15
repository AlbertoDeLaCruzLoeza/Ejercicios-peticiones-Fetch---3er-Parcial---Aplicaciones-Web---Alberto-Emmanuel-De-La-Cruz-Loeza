async function fetchPokemon() {
    const query = document.getElementById('pokemonQuery').value.toLowerCase() || 'ditto';
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (response.ok) {
        const data = await response.json();
        displayPokemon(data);
    } else {
        document.getElementById('pokemonInfo').innerHTML = '<div class="col-md-12"><p class="text-danger">Pokémon no encontrado.</p></div>';
    }
}

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
        <div class="col-md-4">
            <div class="card">
                <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                <div class="card-body">
                    <h5 class="card-title">${capitalizeFirstLetter(pokemon.name)}</h5>
                    <p class="card-text">ID: ${pokemon.id}</p>
                    <p class="card-text">Altura: ${pokemon.height / 10} m</p>
                    <p class="card-text">Peso: ${pokemon.weight / 10} kg</p>
                    <p class="card-text">Tipo: ${pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ')}</p>
                </div>
            </div>
        </div>
    `;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fetch default Pokémon on page load
document.addEventListener('DOMContentLoaded', () => fetchPokemon());
