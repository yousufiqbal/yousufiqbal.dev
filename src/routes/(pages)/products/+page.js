import { pb } from '$lib/database/db';

/** @type {import('./$types').PageLoad} */
export async function load() {

    const products = await pb.collection('products').getFullList()

    return { products };
    
}