<script>
  import '$lib/styles/all.css'
  import 'uno.css'
  import { dev } from '$app/environment';
  import { preloadData } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { currency, dark } from '$lib/stores';
  import { onMount } from 'svelte';

  const setTheme = () => {
    let theme = localStorage.getItem('theme') || 'light'
    $dark = theme == 'dark' ? true : false
    if ($dark) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }

  const doPrefetch = () => {
    const links = ['/', '/services', '/contact', '/projects']
    for (const link of links) preloadData(link)
  }

  const setCurrency = async () => {
    if (dev) return
    const response = await fetch('https://ipapi.co/currency')
    if (response.ok) {
      let whitelist = ['PKR', 'USD', 'GBP']
      let got = await response.text()
      $currency = whitelist.includes(got) ? got : 'USD'
    } else {
      $currency = 'USD'
    }
  }

  onMount(async () => {
    setTheme()
    await setCurrency()
    doPrefetch()
  })
</script>

<Header />

<main>
  <slot></slot>
</main>

<Footer />