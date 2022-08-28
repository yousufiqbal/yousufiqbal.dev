<script>
  export let above = null, subtitle
</script>

<div class="subtitle">
  {#if above}
  <div class="above">{above}</div>
  {/if}
  <h2>{subtitle}</h2>
</div>

<style>
  .subtitle {
    display: grid;
    gap: 5px;
    margin-bottom: var(--mb, 30px);
    /* border: 1px dashed red; */
  }
  .above {
    color: var(--primary);
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1;
  }
</style>