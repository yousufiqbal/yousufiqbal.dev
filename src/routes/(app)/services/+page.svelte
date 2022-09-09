<script>
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Services from "$lib/components/Services.svelte";
  import Title from "$lib/components/Title.svelte";
  import { services } from "$lib/data";
  import { onMount } from 'svelte'

  onMount(() => {
    doPrefetch()
  })

  const doPrefetch = () => {
    const links = ['/services/personal-website', '/services/business-website', '/services/design-to-website']
    for (const link of links) prefetch(link)
  }
</script>

<Seo title="Pricacy" description="Pricacy policy for clients and common users" />

<Section>
  <Title typeEffect icon="ri:list-check-2" title="Services" above="Jobs I Do" />
  <Services {services} />
  <Button name="See Templates" type="outline" href='/templates'  />
</Section>