const pokeName = document.getElementById('pokeName');
const pokeNo   = document.getElementById('pokeNo');
const pokeTypes = document.getElementById('poketypes');
const poke = document.getElementById('pokesearch');
const pokeImg = document.getElementById('poke-img');

const fetchPokemon = () => {
    if (document.getElementById('pokesearch').value != "") {
    let getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(getPokemonUrl(poke.value))
        .then(response => response.json())
            .then(pokemons => {
                const pokemon = pokemons.name;
                const types = pokemons.types.map(typeInfo => typeInfo.type.name);
                pokeName.innerHTML = (pokemon);
                pokeTypes.innerHTML = types.join(' | ');  
                pokeNo.innerHTML =  `#${pokemons.id}`; 
                pokeImg.src = `https://cdn.traction.one/pokedex/pokemon/${pokemons.id}.png`;
                const statName = pokemons.stats.map(statsInfo => statsInfo.stat.name);
                const stats =  pokemons.stats.map(statsInfo => statsInfo.base_stat); 
                console.log(stats);
                document.getElementById("chart").innerHTML = '<canvas id="pokeStats" width="150" height="90"></canvas>';
                var ctx = document.getElementById('pokeStats').getContext('2d');
                const pokeStats = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: statName, 
                        datasets: [{
                            label: 'Base Stats',
                            data: stats,
                            backgroundColor: ['rgba(249, 0, 2,0.4)',
                        'rgba(237, 124, 54, 0.4)',
                        'rgba(248, 206, 68, 0.4)',
                        'rgba(103, 147, 237, 0.4)',
                        'rgba(127, 199, 90, 0.4)',
                        'rgba(243, 84, 134, 0.4)'],
                            borderColor: 'rgba(25, 25, 25, 0.42)', 
                            borderWidth: 1
                        }]    
                    }
                });
                
        })
    }else {alert('insira o nome do pokémon');
        document.getElementById('pokesearch').focus();}
}

// fetchPokemon();