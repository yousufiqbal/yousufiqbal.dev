<script>
  import Button from "$lib/components/Button.svelte";
  import Hero from "$lib/components/Hero.svelte";
    import Projects from "$lib/components/Projects.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Services from "$lib/components/Services.svelte";
  import Technologies from "$lib/components/Technologies.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Home" description="Using modern technologies, I design and develop websites that are responsive, sleek, performant and SEO friendly." />

<Hero />

<Section> 
   

  <!-- Services -->
  <Title icon="i-ri:list-check-2" title="Services" above="Things I Do" />
  <Services limit={3} />
  <Button type="secondary" name="See All Services" href="/services" --mb="70px" />

  <!-- Projects -->
  <Title icon="i-ri:briefcase-2-line" title="Projects" above="My Works" />
  <Projects limit={3} />
  <Button type="secondary" name="See All Projects" href="/projects" --mb="70px" />
  
  <!-- Technologies -->
  <Title icon="i-ri:stack-line" title="Technologies" above="Tech Stack I Use" />
  <Technologies limit={3} />
  <Button name="See All Technologies" type="secondary" href='/technologies' --mb="70px" />

</Section>