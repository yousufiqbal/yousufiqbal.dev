export let prerender = true

/** @type {import('./$types').LayoutLoad} */
export const load = ({ url }) => {
  return { url }
}