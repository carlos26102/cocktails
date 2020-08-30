import presentDrinks from './src/js/presentDrinks.js';
import './src/js/searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

// Cuando se cargue el HTML, aunque no haya cargado todavía el css,images 
// o subframes(DOMContentLoaded), llamamos a presentDrinks pasándole la URL de la API
window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(URL);
});