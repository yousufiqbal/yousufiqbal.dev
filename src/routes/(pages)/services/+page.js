import { pb } from '$lib/database/db';

/** @type {import('./$types').PageLoad} */
export async function load() {

    const services = await pb.collection('services').getFullList({
        expand: 'categories'
    })
    console.log(services)

    return { services };
}