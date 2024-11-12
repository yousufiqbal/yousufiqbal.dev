<script>
    import services from "$lib/database/services";
    import Card from "./Card.svelte";
    import Cards from "./Cards.svelte";
    import Content from "./Content.svelte";
    import Subtitle from "./Subtitle.svelte";
    import Title from "./Title.svelte";
</script>

{#each services as service}
<Title icon="i-ri:list-check-2" title="{service.name}" />

<Cards>

{#each service.items as item}
<Card>
    <Subtitle subtitle="{item.title}" />
    <Content>
    <p>{item.description}</p>
    </Content>
</Card>
{:else}

<Content>
    <p>No Services</p>
</Content>
{/each}

</Cards>
{/each}
  