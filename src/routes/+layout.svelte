<script>
import { prefetch } from '$app/navigation';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { dark } from '$lib/stores';
  import '$lib/styles/all.css'
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition'

  onMount(() => {
    // Getting theme..
    $dark = localStorage.getItem('theme') || 'light'
    // Prefetching top-level links for fast navigation..
    const links = ['/', '/services', '/contact', '/designs', '/benefits', '/tech-stack', '/contact/thank-you']
    for (const link of links) {
      prefetch(link)
    }
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

<Footer />