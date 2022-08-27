/**
 * 
 * @param {string} str 
 * @returns kebab-cased string
 */
export const kebabCase = str => {
  return str.toLowerCase().trim().replace(/ /g, '-')
}