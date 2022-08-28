<script>
import { prefetch } from '$app/navigation';

  import { page } from '$app/stores';
  import { dark } from '$lib/stores';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition'

  export let links = [
    { name: 'Home', href: '/', icon: 'ri:home-3-line' },
    { name: 'Designs', href: '/designs', icon: 'ri:brush-line' },
    { name: 'Services', href: '/services', icon: 'ri:list-check-2' },
    { name: 'Contact', href: '/contact', icon: 'ri:mail-send-line' },
  ]

  const toggleTheme = () => {
    $dark = !$dark
    setTimeout(() => {
      localStorage.setItem('theme', $dark ? 'dark' : 'light')
    }, 0);
  }

  // Prefetching top-level links for fast navigation..
  onMount(() => {
    for (const link of links) {
      prefetch(link.href)
    }
  })
</script>

<div class="header-wrapper">

  <div class="header">

    <a aria-label="logo" href="/" class="logo"><Icon width="24" icon="ri:blaze-fill" /></a>

    <button aria-label="{$dark? 'light' : 'dark'} theme" on:click={toggleTheme} class="button">
      {#key $dark}
      <i in:fly={{y: -30, duration: 150}}>
        <Icon width="24" icon="{$dark? 'ri:moon-line' : 'ri:sun-line'}" />
      </i>
      {/key}
    </button>

    <div class="navigation">
      {#each links as link}
      <a class:active={$page.url.pathname == link.href} href="{link.href}">
        <Icon width="22" icon="{link.icon}" />
        <span>{link.name}</span>
      </a>
      {/each}
    </div>

  </div>

</div>

<style>
  .header-wrapper {
    box-shadow: 0 3px 10px 0 lightgray;
    position: relative;
    z-index: 10;
    /* margin-bottom: 40px; */
  }
  .header {
    display: grid;
    grid-template-areas: 
    'logo button'
    'navigation navigation';
    justify-content: space-between;
    grid-auto-rows: minmax(20px, auto);
    /* border-bottom: 1px solid var(--border); */
    max-width: 1200px;
    margin: 0 auto;
  }
  .logo {
    margin-left: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-self: start;
    grid-area: logo;
    /* border: 1px dashed red; */
  }
  .logo:hover, .button:hover {
    color: var(--primary)
  }
  .button {
    margin-right: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-self: end;
    grid-area: button;
    /* border: 1px dashed blue; */
  }
  .navigation {
    position: sticky;
    top: 0;
    display: flex;
    grid-area: navigation;
    /* border: 1px dashed green; */
  }
  .navigation a {
    padding: 10px 0;
    flex: 1;
    display: grid;
    gap: 5px;
    justify-items: center;
    border-right: 1px solid var(--border);
    border-top: 1px solid var(--border);
    font-size: 14px;
    text-transform: uppercase;
    transition: color 500ms;
  }
  .navigation a:last-child {
    border-right: none;
  }
  .navigation a:hover {
    border-top-color: var(--primary);
  }
  .active {
    color: var(--primary);
  }
  @media (min-width: 600px) {
    .navigation a {
      /* border: 1px dashed red; */
      /* justify-self: center; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 15px 0;
      /* color: red; */
    }
  }
  @media (min-width: 900px) {
    .navigation a {
      border-top: none;
      padding: 10px 20px;
    }
    .navigation span {
      transition: color 500ms;
    }
    .navigation a:hover span {
      color: var(--primary);
    }
    .header {
      grid-template-areas: 'logo navigation button';
    }
  }
</style>