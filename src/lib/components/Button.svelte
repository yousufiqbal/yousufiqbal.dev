<script>
  import Icon from '@iconify/svelte'

  export let name, icon = 'ri:arrow-right-s-line'
  export let href = null
  export let type = 'primary'
</script>

{#if !href}
<button on:click class="button {type}">
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
    /* border: 1px dashed red; */
    display: inline-flex;
    border-radius: var(--radius);
    gap: 10px;
    padding: 10px 10px 10px 15px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 300ms;
    font-weight: 500;
    margin-bottom: var(--mb, 0);
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
  .secondary:hover, .success:hover {
    background-color: var(--primary);
    color: var(--on-primary);
  }
  .outline:hover {
    background-color: var(--primary);
    color: var(--on-primary);
    border: 1px solid transparent;
  }
  .ghost:hover {
    border: 1px solid var(--secondary);
  }
</style>