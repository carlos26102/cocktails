// Definimos setDrink donde al hacer click en section nos guardará 
// el id en localStorage, para así poder usarlo en la página de detalle de cada cocktail
const setDrink = (section) => {
    section.addEventListener('click', function(e) {
        const id = e.target.parentElement.dataset.id;
        console.log(id);
        localStorage.setItem('drink', id);
    });
};
export default setDrink;