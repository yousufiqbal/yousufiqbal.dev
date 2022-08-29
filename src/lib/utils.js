/**
 * 
 * @param {string} str 
 * @returns kebab-cased string
 */
export const kebabCase = str => {
  return str.toLowerCase().trim().replace(/ /g, '-')
}

/**
 * 
 * @param {object} obj 
 * @returns true if object is empty like {}
 */
export const isEmpty = obj => {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
}