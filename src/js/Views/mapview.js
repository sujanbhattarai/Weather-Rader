import {elements } from './base';

import {key1} from '../config';

export const renderCity = query => {
    const markup = `
    <iframe width="750" height="656" frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=${query}&key=${key1}"allowfullscreen></iframe>
`;
    elements.map.insertAdjacentHTML('beforeend', markup);
}

export const clearMap = () => {
    elements.map.innerHTML = '';
}

