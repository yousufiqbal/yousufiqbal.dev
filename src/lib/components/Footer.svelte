<script>
  import Icon from "@iconify/svelte";
  import Container from "./Container.svelte";

  let links = [
    { name: 'Home', href: '/' },
    { name: 'Designs', href: '/designs' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]
  let otherLinks = [
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Twitter', href: '/' },
  ]
</script>

<div class="footer-wrapper">
  <Container>

    <div class="footer">
      <i class="logo"><Icon icon="ri:blaze-fill" /></i>
      <div class="link-group">
        <div class="links">
          {#each links as { href, name }}
          <a {href}>{name}</a>
          {/each}
        </div>
        <div class="links">
          {#each otherLinks as { href, name }}
          <a {href}>{name}</a>
          {/each}
        </div>
      </div>
      <div class="copyright">
        © {new Date().getFullYear()} - Built with <a href="https://kit.svelte.dev">SvelteKit</a>
      </div>
    </div>

  </Container>
</div>

<style>
  .footer-wrapper {
    padding: 50px 0;
    background-color: var(--secondary);
    color: var(--on-secondary);
  }
  .footer {
    display: grid;
    justify-items: center;
    gap: 50px;
  }
  i {
    font-size: 70px;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .copyright {
    color: var(--on-footer-others);
  }
  .link-group {
    display: grid;
    justify-items: center;
    gap: 20px;
  }
  a {
    border-bottom: 1px solid transparent;
    transition: border 400ms;
  }
  a:hover {
    border-bottom: 1px solid var(--on-secondary);
  }
  .copyright a {
    color: rgb(255, 175, 157);
  }
</style>