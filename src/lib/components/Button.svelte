<script>
  import Icon from '@iconify/svelte'

  export let name, icon = null
  export let href = null
  export let type = 'primary'
</script>

{#if !href}
<button class="button {type}">
  <span>{name}</span>
  {#if icon}
  <Icon width="22" {icon} />
  {/if}
</button>

{:else}
<a {href} class="button {type}">
  <span>{name}</span>
  {#if icon}
  <Icon width="22" {icon} />
  {/if}
</a>
{/if}

<style>
  .button {
    display: flex;
    align-items: center;
    border-radius: var(--radius);
    gap: 5px;
    padding: 5px 10px 5px 15px;
    border: 1px solid black;
    text-transform: uppercase;
    font-size: 15px;
  }
</style>