import { pb } from '$lib/database/db';

/** @type {import('./$types').PageLoad} */
export async function load() {

    const services = (await pb.collection('services').getList(1, 3)).items
    const products = (await pb.collection('products').getList(1, 3)).items
    const techs = (await pb.collection('techs').getList(1, 3)).items

    return { services, products, techs };

}