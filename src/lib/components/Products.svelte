<script>
    import products from "$lib/database/products";
    import Card from "./Card.svelte";
    import Cards from "./Cards.svelte";
    import Content from "./Content.svelte";
    import Subtitle from "./Subtitle.svelte";
</script>

<Cards>

{#each products as product}
<Card>
    <Subtitle subtitle={product.name} />
    <Content>
    <p class="description">
        {product.description}
    </p>
    </Content>
</Card>
{/each}

</Cards>