<script>
  import Button from "$lib/components/Button.svelte";
  import Title from "$lib/components/Title.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Cards from "$lib/components/Cards.svelte";
  import Card from "$lib/components/Card.svelte";
  import Content from "$lib/components/Content.svelte";

  export let data
</script>

<Meta title="Technologies" description="To build awesome websites I use HTML, CSS, JavaScript, NodeJS, SvelteJS, SvelteKit, VSCode, etc." />
  
<Title icon="i-ri:stack-line" title="Technologies" />

<Cards>

  {#each data.techs as tech}
  <Card>
    <Subtitle subtitle={tech.name} icon={tech.icon_url} />
    <Content>
      <p class="description">
        {@html tech.description}
      </p>
    </Content>
  </Card>
  {/each}

</Cards>
  
<Button name="See Services" type="secondary" href='/services'  />