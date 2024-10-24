<script lang="ts">
  export let subtitle: string
  export let icon: null | string = null
</script>

<div class="subtitle">
  {#if icon}
  <!-- <p>{}</p> -->
  <img width="20" src="{icon}" alt="{icon}">
  {/if}
  <h2>{subtitle}</h2>
</div>

<style>
  .subtitle {
    /* border: 1px dashed red; */
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }
  h2 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 24px;
    line-height: 1;
  }
</style>