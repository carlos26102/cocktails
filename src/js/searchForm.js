import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// Asignamos selectores
const form = get('.search-form');
const input = get('[name="drink"]');

// Este Event realiza una fetch request(solicitud de recuperación) cuando llame 
// a presentDrinks y dependiendo de cuál sea mi valor en la entrada, buscará en 
// la API y devolverá las bebidas que incluyan los caracteres que estamos introduciendo
form.addEventListener('keyup', function(e) {
    e.preventDefault();
    const value = input.value;
    if (!value) {
        return;
    } else {
        presentDrinks(`${baseURL}${value}`);
    }
});