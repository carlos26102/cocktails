import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

// Llamamos a fetchDrinks(para que haga el fetch y obtener data(en JSON)) 
//y llamamos a displayDrinks
const showDrinks = async(url) => {
    //fetch drinks
    const data = await fetchDrinks(url);
    console.log(data);

    //display drinks (si existe section(traen datos la API), 
    //con setDrink amacenamos el id)
    const section = await displayDrinks(data);
    if (section) {
        setDrink(section);
    };
};

export default showDrinks;