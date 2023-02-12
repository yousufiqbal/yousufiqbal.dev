<script lang="ts">
  export let name: string
  export let icon = 'i-ri:arrow-right-s-line'
  export let href: null | string = null
  export let type: "primary" | "secondary" | "outline" | "success" | "ghost" = 'primary'

  let element: string = href ? 'a' : 'button'
</script>

<svelte:element this={element} {href} on:click on:keydown class="button {type}">
  <span>{name}</span>
  {#if icon}
  <i><span class="{icon}"></span></i>
  {/if}
</svelte:element>

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
    align-items: center;
    font-weight: bold;
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
    border: 1px solid var(--secondary);
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
  i {
    font-size: 20px;
  }
</style>