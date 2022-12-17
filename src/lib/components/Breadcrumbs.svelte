<script lang="ts">
  import { page } from "$app/stores";

  export let crumbs: { name: string, href: string }[] = []
</script>

{#if crumbs.length != 0}
<div class="breadcrumbs">

  {#each crumbs as link, index}

  {#if $page.url.pathname != link.href}
  <a href="{link.href}">{link.name}</a>
  {:else}
  <div>{link.name}</div>
  {/if}
  
  {#if index < crumbs.length - 1}
  <i><span class="i-ri:arrow-right-s-line"></span></i>
  {/if}
  
  {/each}
  
</div>
{/if}

<style>
  .breadcrumbs {
    /* border: 1px dashed red; */
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--above-below);
    margin-bottom: var(--mb, 30px);
  }
  a {
    color: var(--primary);
    /* border: 1px dashed blue; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 300ms;
  }
  a:hover {
    color: var(--primary);
    /* text-decoration: underline; */
  }
</style>