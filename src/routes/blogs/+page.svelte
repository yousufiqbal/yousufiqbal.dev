<script>
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Blogs from "$lib/components/Blogs.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Blogs" description="List of original writings" />

<Section>
  <Title typeEffect icon="i-ri:article-line" title="Blogs" above="My Writings" />
  <Blogs />
</Section>