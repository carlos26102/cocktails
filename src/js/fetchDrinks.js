import { showLoading } from './toggleLoading.js';

// Hacemos fetch a la API, (entre medias mostramos un cargando si tarda) 
// y los datos recogidos los pasamos a JSON y lo devolvemos y si no nos dará error
const fetchDrinks = async(url) => {
    showLoading();
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default fetchDrinks;