<script>
  import Benefits from "$lib/components/Benefits.svelte";
import Container from "$lib/components/Container.svelte";
import Hero from "$lib/components/Hero.svelte";
import Section from "$lib/components/Section.svelte";
import Seo from "$lib/components/Seo.svelte";
import Services from "$lib/components/Services.svelte";
import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Home" description="Design your personal, business or company websites, or convert your design files to live website with me, using modern web technology." />

<Hero />

<Section>
  <Title icon="ri:line-chart-line" title="Benefits" above="9 Reasons to work with me" />
  <Benefits />
  <Title icon="ri:list-check-2" title="Services" above="Jobs I Do" />
  <Services />
</Section>