<script>
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Container --pd="30px">
  <Title title="Sorry. This is an Error" above="404" icon="i-ri:error-warning-line" />
  <Content>
    <p>This page does not exist on my computer. Meanwhile you can browse links from top-bar.</p>
  </Content>
</Container>