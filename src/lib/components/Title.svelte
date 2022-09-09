<script>
  import Icon from '$lib/components/Icon.svelte'
  import { onMount } from 'svelte';

  export let title, above = null, icon = null
  let typed = ''
  export let typeEffect = false

  onMount(() => {
    startTypewriter()
  })

  const startTypewriter = () => {
    // only do typeing effect if above is there..
    if (!above || !typeEffect) return
    let index = 0
    let interval = setInterval(() => {
      typed += above[index]
      index++
      if (index == above.length) clearInterval(interval)
    }, 100)
  }
</script>

<div class="title">
  {#if above}
  <div aria-label="{above}" class="above">{typeEffect ? typed : above}&nbsp;</div>
  {/if}
  <div class="icon-h1">
    {#if icon}
    <i>
      <Icon {icon} />
    </i>
    {/if}
    <h1>{@html title}</h1>
  </div>
</div>

<style>
  .title {
    /* border: 1px dashed red; */
    text-transform: capitalize;
    display: grid;
    margin-bottom: var(--mb, 40px);
  }
  h1 {
    font-size: 40px;
  }
  :global(.title h1 span) {
    color: var(--primary);
  }
  .above {
    color: var(--above-below);
  }
  .icon-h1 {
    /* border: 1px dashed red; */
    display: flex;
    align-items: start;
    gap: 10px;
  }
  i {
    margin-top: 13px;
    color: var(--primary);
    font-size: 32px;
  }
</style>