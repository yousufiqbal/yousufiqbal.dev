<script>
  import Technologies from "$lib/components/Technologies.svelte";
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
  import Title from "$lib/components/Title.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="Technologies" description="To build awesome websites I use HTML, CSS, JavaScript, NodeJS, SvelteJS, SvelteKit, VSCode, etc." />

<Section>
  <Button type="outline" name="Go Back Home" href="/" --mb="40px" icon="i-ri:home-3-line" />
  <Title typeEffect icon="i-ri:stack-line" title="Technologies" above="Tech Stack I Use" />
  <Technologies />
  <Button name="See Services" type="secondary" href='/services'  />
</Section>