import { pb } from '$lib/database/db';

/** @type {import('./$types').PageLoad} */
export async function load() {

    const projects = await pb.collection('projects').getFullList()

    return { projects };
    
};