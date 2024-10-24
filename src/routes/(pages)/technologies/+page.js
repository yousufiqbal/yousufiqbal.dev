import { pb } from '$lib/database/db';

/** @type {import('./$types').PageLoad} */
export async function load() {

    const techs = await pb.collection('techs').getFullList()
    return { techs }

}