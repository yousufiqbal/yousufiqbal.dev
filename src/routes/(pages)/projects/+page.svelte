<script>
  import Meta from "$lib/components/Meta.svelte";
  import Title from "$lib/components/Title.svelte";
  import Cards from "$lib/components/Cards.svelte";
  import Card from "$lib/components/Card.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Content from "$lib/components/Content.svelte";

  export let data
</script>

<Meta title="Projects" description="List of projects I've worked on, or, I'm working on" />

<Title icon="i-ri:briefcase-2-line" title="Projects" above="My Works" />

<Cards>

  {#each data.projects as project}
  <Card>
    <Subtitle subtitle={project.name} />
    <Content>
      <p class="description">
        {@html project.description}
      </p>
    </Content>
  </Card>
  {/each}

</Cards>
  