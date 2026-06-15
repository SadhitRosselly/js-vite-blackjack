/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML = (carta) => {
    if(!carta) throw new Error('La carta es un argumento obligatorio');

     // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `/js-vite-blackjack/assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta;
}