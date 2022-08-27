<script>
import Container from "./Container.svelte";

</script>
<div class="section">
  <Container>
    <slot></slot>
  </Container>
</div>

<style>
  .section {
    padding: 50px 0;
    background-color: var(--surface);
  }
</style>