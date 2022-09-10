<script>
  import { prefetch } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { currency, dark } from '$lib/stores';
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

  $: console.log($currency)

  const doPrefetch = () => {
    const links = ['/', '/services', '/contact', '/templates', '/benefits']
    for (const link of links) prefetch(link)
  }

  const setCurrency = async () => {
    const response = await fetch('http://ip-api.com/json/?fields=currency')
    $currency = (await response.json()).currency
  }

  onMount(() => {
    setCurrency()
    setTheme()
    doPrefetch()
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