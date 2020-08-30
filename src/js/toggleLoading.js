import get from './getElement.js';

const loading = get('.loading');

// Muestra gif de cargando
export const showLoading = () => {
    loading.classList.remove('hide-loading');
}

// Oculta gif de cargando
export const hideLoading = () => {
    loading.classList.add('hide-loading');
}