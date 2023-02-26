/**
 * 
 * @param {string} str 
 * @returns {string} kebab-cased string
 */
export const kebabCase = str => {
  return str.toLowerCase().trim().replace(/ /g, '-')
}

/**
 * 
 * @param {object} obj 
 * @returns {boolean}
 */
export const isEmpty = obj => {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
}

/**
 * 
 * @param {object} obj - untrimmed object 
 * @returns {object} trimmed object
 */
export const trimObject = obj => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = obj[curr].trim()
    return acc;
  }, {});
}

export const titleCase = str => str
  .split("-")
  .filter(x => x.length > 0)
  .map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
  .join(" ");