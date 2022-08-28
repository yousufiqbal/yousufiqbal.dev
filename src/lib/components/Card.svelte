<script>
  export let type = 'primary'
</script>

<div class="card {type}">
  <slot></slot>
</div>

<style>
  .card {
    display: grid;
    /* border: 1px solid red; */
    padding: 20px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
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
      padding: 30px;
    }
  }
</style>