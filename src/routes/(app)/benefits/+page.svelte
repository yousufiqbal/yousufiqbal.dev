<script>
  import Benefits from "$lib/components/Benefits.svelte";
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
import Seo from "$lib/components/Seo.svelte";
  import Title from "$lib/components/Title.svelte";
  import { benefits } from "$lib/data";
</script>

<Seo title="Benefits" description="Read all the goodness you are getting from developing your website from me." />

<Section>
  <Title typeEffect icon="ri:thumb-up-line" title="Benefits" above="9 Reasons to work with me" />
  <Benefits {benefits} />
  <Button name="See Services" type="secondary" href='/services'  />
</Section>