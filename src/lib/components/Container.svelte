<script>
  export let surface = false
</script>

<div class:surface class="container">
  <slot></slot>
</div>

<style>
  .container {
    /* border: 1px dashed blue; */
    max-width: var(--mw, 1200px);
    margin: 0 auto;
    padding: var(--pd, 0 30px);
  }
</style>