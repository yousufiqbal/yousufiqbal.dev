<script>
  import Benefits from "$lib/components/Benefits.svelte";
import Button from "$lib/components/Button.svelte";
import ButtonHolder from "$lib/components/ButtonHolder.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Services from "$lib/components/Services.svelte";
  import Technologies from "$lib/components/Technologies.svelte";
  import Title from "$lib/components/Title.svelte";
  import { benefits, technologies } from "$lib/data";

</script>

<Seo title="Home" description="Design your personal, business or company websites, or convert your design files to live website with me, using modern web technology." />

<Hero />

<Section>
  <Title icon="ri:list-ordered" title="Benefits" above="9 Reasons to work with me" />
  <Benefits benefits={benefits.slice(0, 3)} />
  <Button type="primary" name="Read 6 More Benefits" href="/benefits" --mb="70px" />
  <Title icon="ri:list-check-2" title="Services" above="Jobs I Do" />
  <Services />
  <Title icon="ri:stack-line" title="Tech Stack" above="Technologies I Use" />
  <Technologies technologies={technologies.slice(0, 3)} />
  <Button name="See Complete Tech Stack" type="secondary" href='/tech-stack' --mb="70px" />
</Section>