<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Title from "$lib/components/Title.svelte";

  const crumbs = [
    { name: 'Services', href: '/services' },
    { name: 'Personal Website', href: '/services/personal-website' },
  ]
</script>

<Seo title="Personal Website" description="I provide three services: 1. Personal website, 2. Business website and 3. Design to website development" />

<Section>
  <Breadcrumbs {crumbs} />
  <Title title="<span>Personal</span> Website" />
</Section>