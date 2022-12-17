<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";

  let current = 'desktop'

  /**
   * 
   * @param {any} e
   */
  const changeMode = e => {
    current = e.target.dataset.mode
  }
</script>

<div class="wrapper">
  <div class="topbar">
    <div class="left">
      <Button href="/templates" name="Back" type="secondary" icon="ri:arrow-left-line" />
    </div>
    <div class="modes">
      <button class:active={current=='desktop'} on:click={changeMode} data-mode='desktop'>Desktop</button>
      <button class:active={current=='tablet'} on:click={changeMode} data-mode='tablet'>Tablet</button>
      <button class:active={current=='mobile'} on:click={changeMode} data-mode='mobile'>Mobile</button>
    </div>
    <div class="right">
      <Button href="/contact" name="Contact Me" icon="ri:mail-send-line" />
    </div>
  </div>
  {#if $page.params.from == 'gp'}
  <iframe class="{current}" title="Web Template" src="https://gpsites.co/{$page.params.name}/" frameborder="0" ></iframe>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
  }
  .topbar {
    display: grid;
    grid-template-columns: auto auto;
    /* justify-content: space-between; */
    align-items: center;
    padding: 10px;
    gap: 20px;
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
  }
  .modes {
    display: none;
  }
  /* Then style the iframe to fit in the container div with full height and width */
  iframe {
    /* border: 1px dashed red; */
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transition: max-width 500ms;
  }
  .desktop {
    max-width: 100%;
  }
  .tablet {
    max-width: 768px;
  }
  .mobile {
    max-width: 380px;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .right {
    justify-self: right;
  }
  @media (min-width: 1300px) {
    .topbar {
      grid-template-columns: auto 1fr auto;
    }
    .active {
      color: var(--primary);
    }
    .modes {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
  }
</style>