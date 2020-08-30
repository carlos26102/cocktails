import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

// En displayDrinks, asignamos los selectores con get, en drinks le pasaremos 
// los datos extraidos de la API, si no trae nada mostramos error. 
// Mapeamos el array recibido generando otro y añadimos dinámicamente
// al HTML lo que queremos mostrar. Devuelve section que usaremos junto con setDrink para guardar el id
const displayDrinks = ({ drinks }) => {
    const section = get('.section-center');
    const title = get('.title');
    if (!drinks) {
        hideLoading();
        title.textContent = 'sorry, no drinks matched your search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="${name}" />
          <h3>${name}</h3>
        </article>
      </a>`
    }).join('');
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
};
export default displayDrinks;