<script>
  import '$lib/styles/all.css'
  import 'uno.css'
  import { preloadData } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  // import { dark } from '$lib/stores';
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
 
  inject({ mode: dev ? 'development' : 'production' });


  // const setTheme = () => {
  //   let theme = localStorage.getItem('theme') || 'light'
  //   $dark = theme == 'dark' ? true : false
  //   if ($dark) {
  //     document.body.classList.remove('light')
  //     document.body.classList.add('dark')
  //   }
  // }

  const doPrefetch = () => {
    const links = ['/', '/services', '/contact', '/projects']
    for (const link of links) preloadData(link)
  }


  onMount(async () => {
    // setTheme()
    doPrefetch()
  })
</script>

<Header />

<!-- <main> -->
<slot></slot>
<!-- </main> -->

<Footer />