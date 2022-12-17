<script>
  import Button from "$lib/components/Button.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Services from "$lib/components/Services.svelte";
  import Technologies from "$lib/components/Technologies.svelte";
  import Title from "$lib/components/Title.svelte";
  import { technologies } from "$lib/data/technologies";
  import { services } from "$lib/data/services";
</script>

<Seo title="Home" description="Using modern technologies, I design and develop websites that are responsive, sleek, performant and SEO friendly." />

<Hero />

<Section>  

  <!-- Services -->
  <Title icon="i-ri:list-check-2" title="Services" above="Jobs I Do" />
  <Services {services} />
  <Button type="primary" name="See All Services" href="/services" --mb="70px" />
  
  <!-- Tech-Stack -->
  <Title icon="i-ri:stack-line" title="Tech Stack" above="Technologies I Use" />
  <Technologies technologies={technologies.slice(0, 3)} />
  <Button name="See Complete Tech Stack" type="secondary" href='/tech-stack' --mb="70px" />
  
</Section>