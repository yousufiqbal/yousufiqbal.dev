<script>
  import Technologies from "$lib/components/Technologies.svelte";
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
  import Title from "$lib/components/Title.svelte";
  import { technologies } from "$lib/data";
</script>

<Section>
  <Button type="outline" name="Go Back Home" href="/" --mb="40px" icon="ri:home-3-line" />
  <Title icon="ri:stack-line" title="Tech Stack" above="Technologies I Use" />
  <Technologies {technologies} />
  <Button name="See Services" type="secondary" href='/services'  />
</Section>