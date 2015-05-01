/**
 * Reemplaza un texto en todos los lugares que encuentre
 *
 * @param {String} text string donde se debe buscar el patron
 * @param {String} search patron a buscar
 * @param {String} newstring no se que es
 * @return: {String} Texto con el patron reemplazado en todos lados.
 */
function replaceAll(text, search, newstring ){
    while (text.toString().indexOf(search) != -1)
        text = text.toString().replace(search,newstring);
    return text;
}