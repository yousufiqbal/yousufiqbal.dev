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
    align-self: start;
    display: flex;
    align-items: center;
    border-radius: var(--radius);
    gap: 10px;
    padding: 10px 10px 10px 15px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 500ms;
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
    font-weight: 500;
    border: 1px solid var(--secondary);
  }
  .success {
    background-color: var(--success);
    color: white;
  }
  .ghost {
    border: 1px solid transparent;
  }
  .primary:hover {
    background-color: var(--secondary);
    color: var(--on-secondary);
  }
  .secondary:hover, .outline:hover {
    background-color: var(--primary);
    color: var(--on-primary);
  }
  .ghost:hover {
    border: 1px solid var(--secondary);
  }
</style>