<script>
  import Icon from '@iconify/svelte'

  export let name, icon = null
  export let href = null
  export let type = 'secondary'
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
    padding: 7px 10px 7px 15px;
    text-transform: uppercase;
    font-size: 15px;
  }
  .primary {
    background-color: var(--primary);
    color: var(--on-primary);
  }
  .secondary {
    background-color: var(--secondary);
    color: var(--on-secondary);
  }
  .outline {
    border: 1px solid var(--secondary);
  }
</style>