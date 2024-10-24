<script>
  import Card from "$lib/components/Card.svelte";
import Cards from "$lib/components/Cards.svelte";
    import Content from "$lib/components/Content.svelte";
import Meta from "$lib/components/Meta.svelte";
    import Subtitle from "$lib/components/Subtitle.svelte";
  import Title from "$lib/components/Title.svelte";
    import { services } from "$lib/data/services";

    export let data
</script>

<Meta title="Services" description="List of services that I provide" />

<Title icon="i-ri:list-check-2" title="Services" />

<Cards>

  {#each data.services as service}
  <Card>
    <Subtitle subtitle="{service.name}" />
    <Content>{@html service.description}</Content>
  </Card>
  {/each}
  
</Cards>