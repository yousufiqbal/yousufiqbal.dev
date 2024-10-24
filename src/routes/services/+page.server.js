import { pb } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const services = await pb
        .collection('services').getOne('zp7kfqeirvjr7j7')

    console.log(services)
    return {};
}