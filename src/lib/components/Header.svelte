<script>
  import { page } from '$app/stores';
  import { dark } from '$lib/stores';
  import { fly } from 'svelte/transition'
  import Icon from '$lib/components/Icon.svelte';

  let scrollY = 0

  export let links = [
    { name: 'Home', href: '/', icon: 'ri:home-3-line' },
    { name: 'Benefits', href: '/benefits', icon: 'ri:thumb-up-line' },
    { name: 'Services', href: '/services', icon: 'ri:list-check-2' },
    { name: 'Templates', href: '/templates', icon: 'ri:brush-line' },
    { name: 'Contact', href: '/contact', icon: 'ri:mail-send-line' },
  ]

  const toggleTheme = () => {
    $dark = !$dark
    setTimeout(() => {
      localStorage.setItem('theme', $dark ? 'dark' : 'light')
    }, 0);
  }
</script>

<svelte:window bind:scrollY />

<div  class="header-wrapper">

  <div class:hide={scrollY != 0} class="header">

    <a class:none={scrollY != 0} aria-label="logo" href="/" class="logo">
      <Icon icon="ri:blaze-line" width="24px" />
    </a>

    <button class:none={scrollY != 0} aria-label="{$dark? 'light' : 'dark'} theme" on:click={toggleTheme} class="button">
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
  @media (max-width: 900px) {
    /* Hide top during scroll before 900px only */
    .header.hide {
      grid-template-areas: 'navigation navigation';
      border-top: none;
    }
    .hide .navigation a {
      border-top: none;
    }
    .hide .logo, .hide .button {
      display: none;
      grid-area: auto;
    }
  }
  .header-wrapper {
    background-color: var(--bg);
    box-shadow: 0 3px 10px 0 lightgray;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 2;
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
    font-size: 12px;
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
      font-size: 14px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 15px 0;
      /* color: red; */
    }
  }
  @media (min-width: 900px) {
    .navigation a {
      gap: 15px;
      border-top: none;
      padding: 15px 20px;
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