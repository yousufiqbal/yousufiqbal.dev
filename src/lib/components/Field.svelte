<script>
  import { kebabCase } from "$lib/utils";
  import Icon from "@iconify/svelte";
  import { fly } from 'svelte/transition'

  export let label, attribute = kebabCase(label), icon
  export let touched = false, error = null
  export let textarea = false
  export let type = 'text', placeholder = null
  export let value
  export let inputmode = 'text'

  const typeMe = node => {
    node.type == type
  }
</script>

<div class="field">
  <label for="{attribute}" >
    <i><Icon {icon} /></i>
    <span>{label}</span>
    <div class="status">
      <Icon icon="ri:check-fill" />
    </div>
  </label>
  {#if !textarea}
  <input on:blur={()=>touched=true} {inputmode} {placeholder} size="1" bind:value id="{attribute}" name="{attribute}" use:typeMe type="text">
  {:else}
  <textarea on:blur={()=>touched=true} {inputmode} {placeholder} bind:value id="{attribute}" name="{attribute}" rows="10"></textarea>
  {/if}
  {#if touched && error}
  <div in:fly={{x: -20, duration: 150}} class="error">{error}</div>
  {/if}
</div>

<style>
  .field {
    display: grid;
    gap: 12px;
    /* border: 1px dashed red; */
  }
  label {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  label i {
    font-size: 22px;
    color: var(--primary);
  }
  label span {
    flex: 1;
    font-weight: 500;
  }
  input, textarea {
    padding: 15px 20px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background-color: var(--bg);
  }
  textarea {
    min-height: 100px;
    max-height: 500px;
    resize: vertical;
    word-break: break-all;
  }
  input:focus, textarea:focus {
    border-color: var(--secondary);
  }
  .error {
    text-transform: capitalize;
    color: var(--failure);
  }
  .status {
    font-size: 22px;
    display: flex;
    color: var(--success);
  }
  ::placeholder {
    color: var(--placeholder);
  }
  </style>