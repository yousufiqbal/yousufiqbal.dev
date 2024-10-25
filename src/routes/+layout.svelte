<script>
  import '$lib/styles/all.css'
  import 'uno.css'
  import { preloadData } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
 
  // Analytics
  inject({ mode: dev ? 'development' : 'production' });

  onMount(async () => {
    
    // Prealoading..
    const links = ['/', '/services', '/contact', '/products']
    for (const link of links) await preloadData(link)

  })
</script>

<Header />

<slot></slot>

<Footer />