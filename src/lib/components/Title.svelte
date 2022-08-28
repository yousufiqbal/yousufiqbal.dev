<script>
  import Icon from '@iconify/svelte'

  export let title, above = null, icon = null
</script>

<div class="title">
  {#if above}
  <div class="above">{above}</div>
  {/if}
  <div class="icon-h1">
    {#if icon}
    <i>
      <Icon {icon} />
    </i>
    {/if}
    <h1>{title}</h1>
  </div>
</div>

<style>
  .title {
    /* border: 1px dashed red; */
    text-transform: capitalize;
    display: grid;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 40px;
  }
  .above {
    color: var(--above-below);
  }
  .icon-h1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  i {
    color: var(--primary);
    font-size: 32px;
  }
</style>