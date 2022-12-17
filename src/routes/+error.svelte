<script>
import Container from "$lib/components/Container.svelte";
import Content from "$lib/components/Content.svelte";
import Title from "$lib/components/Title.svelte";


</script>

<Container --pd="30px">
  <Title title="Not Found" above="404" icon="ri:error-warning-line" />
  <Content>
    <p>This page does not exist on my computer. <em>Apologies</em><br>Meanwhile you can browse links from top-bar.</p>
  </Content>
</Container>