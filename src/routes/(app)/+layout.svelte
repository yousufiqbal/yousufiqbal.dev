<script>
  import { prefetch } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { dark } from '$lib/stores';
  import '$lib/styles/all.css'
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition'

  const setTheme = () => {
    let theme = localStorage.getItem('theme') || 'light'
    $dark = theme == 'dark' ? true : false
    if ($dark) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }

  const doPrefetch = () => {
    const links = ['/', '/services', '/contact', '/templates', '/benefits']
    for (const link of links) prefetch(link)
  }

  onMount(() => {
    setTheme()
    doPrefetch()
  })

  /** @type {import('./$types').LayoutData} */
  export let data
</script>

<svelte:head>
  <script data-goatcounter="https://yousufiqbal.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
</svelte:head>

<Header />

{#key data.url.pathname}
  <main in:fly={{ y: -20, duration: 200 }}>
    <slot></slot>
  </main>
{/key}

<Footer />