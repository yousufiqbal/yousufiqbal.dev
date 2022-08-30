<script>
  export let type = 'primary'
</script>

<div class="card {type}">
  <slot></slot>
</div>

<style>
  .card {
    display: grid;
    position: relative;
    /* border: 1px solid red; */
    padding: var(--pd, 20px);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .primary {
    background-color: var(--bg);
  }
  .surface {
    background-color: var(--surface);
    /* color: white; */
  }
  .secondary {
    background-color: var(--secondary);
    color: var(--on-secondary);
  }
  @media (min-width: 700px) {
    .card {
      padding: var(--pd, 30px);
    }
  }
</style>