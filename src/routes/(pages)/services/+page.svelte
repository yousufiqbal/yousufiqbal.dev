<script>
  import Card from "$lib/components/Card.svelte";
  import Cards from "$lib/components/Cards.svelte";
  import Content from "$lib/components/Content.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Title from "$lib/components/Title.svelte";

  export let data
</script>

<Meta title="Services" description="List of services that I provide" />

{#each data.categories as category}
<Title icon="i-ri:list-check-2" title="{category.name}" />


<Cards>

  {#each category?.expand?.services_via_category_id as service}
  <Card>
    <Subtitle subtitle="{service.name}" />
    <Content>{@html service.description}</Content>
  </Card>
  {:else}
  <Content>
    <p>No Services</p>
  </Content>
  {/each}
  
</Cards>
{/each}
