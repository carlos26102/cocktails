// A getElement le pasamos un selector y lo devuelve si existe, 
// si no existe mostrará error. Y así después asignarlo fácilmente.
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw Error('No seleccionaste un elemento o seleccionaste uno erróneo');
    }
}
export default getElement;