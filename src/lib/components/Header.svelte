<script>
  import { page } from '$app/stores';
    import { whatsapp } from '$lib/data/links';

  let scrollY = 0

  export let links = [
    { name: 'Home', href: '/', icon: 'i-ri:home-3-line' },
    { name: 'Services', href: '/services', icon: 'i-ri:list-check-2' },
    // { name: 'Blogs', href: '/blogs', icon: 'i-ri:article-line' },
    { name: 'Projects', href: '/projects', icon: 'i-ri:briefcase-2-line' },
    { name: 'Contact', href: '/contact', icon: 'i-ri:mail-send-line' },
  ]
</script>

<svelte:window bind:scrollY />

<section>

  <div class:hide={scrollY != 0} class="header">

    <a class:none={scrollY != 0} aria-label="logo" href="/" class="logo">
      <i><span class="i-ri:blaze-line"></span></i>
    </a>
    <a class:none={scrollY != 0} aria-label="whatsapp" class="button whatsapp" href="{whatsapp}">
      <i><span class="i-ri:whatsapp-line"></span></i>
    </a>

    <div class="navigation">
      {#each links as link}
      <a class:active={$page.url.pathname == link.href} href="{link.href}">
        <i><span class="{link.icon}"></span></i>
        <span>{link.name}</span>
      </a>
      {/each}
    </div>

  </div>

</section>

<style>
  .header i {
    font-size: 24px;
  }
  .navigation i {
    font-size: 22px;
  }
  .whatsapp {
    color: green;
  }
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
  section {
    /* border-bottom: 1px solid var(--border); */
    background-color: var(--bg);
    /* box-shadow: 0 3px 10px 0 lightgray; */
    box-shadow: var(--shadow);
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
    gap: 10px;
    /* border: 1px dashed blue; */
  }
  /* .button span {
    font-size: 14px;
    text-transform: uppercase;
  } */
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
    /* border-right: 1px solid var(--border); */
    border-top: 1px solid var(--border);
    font-size: 12px;
    text-transform: uppercase;
    transition: color 300ms;
  }
  /* .navigation a:last-child {
    border-right: none;
  } */
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
      transition: color 300ms;
    }
    .navigation a:hover span {
      color: var(--primary);
    }
    .header {
      grid-template-areas: 'logo navigation button';
    }
  }
</style>