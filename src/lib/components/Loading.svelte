<script>
  import { fly } from 'svelte/transition'
  
  export let message
</script>

<div in:fly={{ x: -20, duration: 150 }} class="loading">
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  {#if message}
  <div class="message">{message}</div>
  {/if}
</div>

<style>
  .loading {
    display: flex;
    align-items: center;
    /* color: red; */
    gap: 10px;
    /* border: 1px dashed blue; */
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
    /* border: 1px dashed red; */
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 8px;
    border: 3px solid var(--primary);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primary) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>