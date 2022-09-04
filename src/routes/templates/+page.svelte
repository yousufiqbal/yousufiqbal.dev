<script>
import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Templates from "$lib/components/Templates.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Templates" description="All artwork web templates, developed to jump start your website from any given web template." />

<Container --pd="50px 30px">
  <Title typeEffect icon="ri:layout-2-line" title="Templates" above="Websites Ideas" />
  <Content>
    <p>This website is just released, and hence is a work in progress. Stay tuned for templates you may see them in a week or two. Take care till then!</p>
  </Content>
  <Templates />
</Container>