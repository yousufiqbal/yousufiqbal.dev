<script>
  import Meta from "$lib/components/Meta.svelte";
  import Title from "$lib/components/Title.svelte";
  import Cards from "$lib/components/Cards.svelte";
  import Card from "$lib/components/Card.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Content from "$lib/components/Content.svelte";

  export let data
</script>

<Meta title="Products" description="List of products I've worked on, or, I'm working on" />

<Title icon="i-ri:briefcase-2-line" title="Products" />

<Cards>

  {#each data.products as product}
  <Card>
    <Subtitle subtitle={product.name} />
    <Content>
      <p class="description">
        {@html product.description}
      </p>
    </Content>
  </Card>
  {/each}

</Cards>
  