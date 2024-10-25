import { pb } from '$lib/database/db';

/** @type {import('./$types').PageLoad} */
export async function load() {

    const categories = await pb.collection('categories').getFullList({
        expand: 'services_via_category_id'
    })
    console.dir(categories, { depth: null })

    return { categories };
}