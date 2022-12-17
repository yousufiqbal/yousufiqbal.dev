<script>
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Projects" description="List of projects I've worked on, or, I'm working on" />

<Section>
  <Title typeEffect icon="i-ri:briefcase-2-line" title="Projects" above="My Works" />
  <Projects />
</Section>