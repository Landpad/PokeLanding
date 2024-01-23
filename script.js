const hamburguer = document.getElementById('hamburguer');
const navUl = document.getElementById('navUl');

const changeImg = document.getElementById('changeImg');
let counter = 1;
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const pkmnDesc1 = document.getElementById('pkmnDesc1');
const pkmnDesc2 = document.getElementById('pkmnDesc2');
const pkmnDesc3 = document.getElementById('pkmnDesc3');
const pkmnGrowl1 = document.getElementById('growl1');
const pkmnGrowl2 = document.getElementById('growl2');
const pkmnGrowl3 = document.getElementById('growl3');

hamburguer.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('clicked');
});

var playPromise = document.querySelector('audio').play();

// In browsers that don’t yet support this functionality,
// playPromise won’t be defined.
if (playPromise !== undefined) {
  playPromise.then(function() {
    // Automatic playback started!
  }).catch(function(error) {
    // Automatic playback failed.
    // Show a UI element to let the user manually start playback.
  });
}

changeImg.addEventListener('click', () => {
    counter++;

    if(counter == 6){
        counter = 1;
    };
    console.log(counter);

    switch(counter) {
        case 1:
            img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';
            img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png';
            img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png';
            pkmnDesc1.innerHTML = "Bulbasaur is a poison/grass type pokemon.";
            pkmnDesc2.innerHTML = "Squirtle is a water-type pokemon.";
            pkmnDesc3.innerHTML = "Charmander is a fire-type pokemon.";
            pkmnGrowl1.src = "https://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3";
            pkmnGrowl2.src = "https://play.pokemonshowdown.com/audio/cries/squirtle.mp3";
            pkmnGrowl3.src = "https://play.pokemonshowdown.com/audio/cries/charmander.mp3";
            break;
        
        case 2:
            img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png';
            img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png';
            img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png';
            pkmnDesc1.innerHTML = "Chikorita is a grass type pokemon.";
            pkmnDesc2.innerHTML = "Totodile is a water-type pokemon.";
            pkmnDesc3.innerHTML = "Cyndaquil is a fire-type pokemon.";
            pkmnGrowl1.src = 'https://play.pokemonshowdown.com/audio/cries/chikorita.mp3';
            pkmnGrowl2.src = 'https://play.pokemonshowdown.com/audio/cries/totodile.mp3';
            pkmnGrowl3.src = 'https://play.pokemonshowdown.com/audio/cries/cyndaquil.mp3';
            break;

        case 3:
            img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png';
            img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png';
            img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png';
            pkmnDesc1.innerHTML = "Treecko is a grass type pokemon.";
            pkmnDesc2.innerHTML = "Mudkip is a water-type pokemon.";
            pkmnDesc3.innerHTML = "Torchic is a fire-type pokemon.";
            pkmnGrowl1.src = 'https://play.pokemonshowdown.com/audio/cries/treecko.mp3';
            pkmnGrowl2.src = 'https://play.pokemonshowdown.com/audio/cries/mudkip.mp3';
            pkmnGrowl3.src = 'https://play.pokemonshowdown.com/audio/cries/torchic.mp3';
            break;

        case 4:
            img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png';
            img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png';
            img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png';
            pkmnDesc1.innerHTML = "Turtwig is a grass type pokemon.";
            pkmnDesc2.innerHTML = "Piplup is a water-type pokemon.";
            pkmnDesc3.innerHTML = "Chimchar is a fire-type pokemon.";
            pkmnGrowl1.src = 'https://play.pokemonshowdown.com/audio/cries/turtwig.mp3';
            pkmnGrowl2.src = 'https://play.pokemonshowdown.com/audio/cries/piplup.mp3';
            pkmnGrowl3.src = 'https://play.pokemonshowdown.com/audio/cries/chimchar.mp3';
            break;
        
        case 5:
            img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png';
            img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png';
            img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png';
            pkmnDesc1.innerHTML = "Snivy is a grass type pokemon.";
            pkmnDesc2.innerHTML = "Oshawott is a water-type pokemon.";
            pkmnDesc3.innerHTML = "Tepig is a fire-type pokemon.";
            pkmnGrowl1.src = 'https://play.pokemonshowdown.com/audio/cries/snivy.mp3';
            pkmnGrowl2.src = 'https://play.pokemonshowdown.com/audio/cries/oshawott.mp3';
            pkmnGrowl3.src = 'https://play.pokemonshowdown.com/audio/cries/tepig.mp3';
            break;
    }
});
