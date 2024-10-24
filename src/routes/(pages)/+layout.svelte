<script>
    import Section from '$lib/components/Section.svelte';

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<Section>
    <slot></slot>
</Section>