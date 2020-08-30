import fetchDrinks from './src/js/fetchDrinks.js';
import displayDrink from './src/js/displaySingleDrink.js';

// Con presentDrink, traemos el id guardado con localStorage, si es 
// la primera vez que accedes no habrá id guardado así que le desviamos a la principal
// y si ya has navegado y se han guardado id's, hacemos fetchDrinks a la url de producto
// único de la API y mostramos detalles de esa bebida a través de displayDrink
const presentDrink = async () => {
    const id = localStorage.getItem('drink');
    if(!id){
        window.location.replace('index.html');
    } else {
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrink(drink);
    };
};
window.addEventListener('DOMContentLoaded',presentDrink);