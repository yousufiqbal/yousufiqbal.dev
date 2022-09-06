<script>
  import Container from "$lib/components/Container.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Templates from "$lib/components/Templates.svelte";
  import Title from "$lib/components/Title.svelte";
  import { templates } from "$lib/templates";
</script>

<Seo title="Templates" description="Best template designs to jump start your website from any given web template." />

<Container --pd="50px 30px">
  <Title typeEffect icon="ri:layout-2-line" title="Templates" above="Websites Ideas" />
  <Templates {templates} />
</Container>