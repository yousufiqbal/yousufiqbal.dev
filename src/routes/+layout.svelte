<script>
  import Header from '$lib/components/Header.svelte';
  import { dark } from '$lib/stores';
  import '$lib/styles/all.css'
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition'
  
  onMount(() => {
    $dark = localStorage.getItem('theme') || 'light'
  })

  /** @type {import('./$types').LayoutData} */
  export let data
</script>


<Header />

{#key data.url.pathname}
  <main in:fly={{ y: -20, duration: 200 }}>
    <slot></slot>
  </main>
{/key}