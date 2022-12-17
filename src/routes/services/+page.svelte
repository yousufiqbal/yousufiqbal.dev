<script>
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Services from "$lib/components/Services.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Services" description="List of services that I provide" />

<Section>
  <Title typeEffect icon="i-ri:list-check-2" title="Services" above="Things I Do" />
  <Services />
</Section>