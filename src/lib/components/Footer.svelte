<script>
  import Container from "$lib/components/Container.svelte";

  let links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]
  let otherLinks = [
    { name: 'Sitemap', href: '/sitemap.xml' },
    // { name: 'Privacy', href: '/privacy' },
    { name: 'Twitter', href: 'https://twitter.com/yousufiqbal_dev' },
  ]
</script>

<section>
  <Container>

    <div class="footer">
      <i class="logo"><span class="i-ri:blaze-line"></span></i>
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
        © {new Date().getFullYear()} - Built with <a href="https://kit.svelte.dev">SvelteKit</a> - Icons by <a href="https://remixicon.com">Remix Icons</a>
      </div>
    </div>

  </Container>
</section>

<style>
  section {
    margin-top: auto;
    padding: 50px 0;
    background-color: var(--footer);
    color: var(--on-footer);
  }
  .footer {
    display: grid;

    gap: 50px;
  }
  i {
    font-size: 70px;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px;
  }
  .copyright {
    color: var(--on-footer-others);
  }
  .link-group {
    display: grid;
 
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
  @media (min-width: 600px) {
    .footer, .link-group {
      justify-items: center;
    }
    .links {
      gap: 30px;
    }
  }
</style>