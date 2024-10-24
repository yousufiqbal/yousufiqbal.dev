<script lang="ts">
  import { fly } from 'svelte/transition';

  export let title: string
  export let icon: null | string = null
</script>

<div class="title">
    {#if icon}
    <i><span class="{icon}"></span></i>
    {/if}
    <h1 in:fly={{ x: -20, duration: 150 }}>{@html title}</h1>
</div>

<style>
  .title {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: var(--mb, 40px);
  }
  h1 {
    font-size: 40px;
  }
  i {
    color: var(--primary);
    font-size: 32px;
  }
</style>