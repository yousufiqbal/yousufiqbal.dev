<script>
  import Header from '$lib/components/Header.svelte';
  import { dark } from '$lib/stores';
  import '$lib/styles/all.css'
  import { onMount } from 'svelte';
  
  onMount(() => {
    $dark = localStorage.getItem('theme') || 'light'
  })
</script>


<Header />

<slot></slot>