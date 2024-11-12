<script>
    import technologies from "$lib/database/technologies";
    import Card from "./Card.svelte";
    import Cards from "./Cards.svelte";
    import Content from "./Content.svelte";
    import Subtitle from "./Subtitle.svelte";
</script>

<Cards>

{#each technologies as tech}
<Card>
    <Subtitle subtitle={tech.name} icon={tech.icon} />
    <Content>
    <p>{tech.description}</p>
    </Content>
</Card>
{/each}

</Cards>