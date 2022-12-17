<script lang="ts">
  export let above: null | string = null
  export let subtitle: string
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
    text-transform: capitalize;
    color: var(--primary);
  }
  h2 {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 26px;
    line-height: 1;
  }
</style>