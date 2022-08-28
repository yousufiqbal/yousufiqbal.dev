<script>
  import Benefits from "$lib/components/Benefits.svelte";
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
  import Title from "$lib/components/Title.svelte";
  import { benefits } from "$lib/data";
</script>

<Section>
  <Button type="outline" name="Go Back Home" href="/" --mb="40px" icon="ri:home-3-line" />
  <Title icon="ri:list-ordered" title="Benefits" above="9 Reasons to work with me" />
  <Benefits {benefits} />
</Section>