<script lang="ts">
  import { kebabCase } from "$lib/utils";
  import { fly } from 'svelte/transition'

  export let label: string
  export let attribute: string = kebabCase(label)
  export let icon: string
  export let touched: boolean = false
  export let error: null | string = null
  export let textarea = false
  export let type = 'text'
  export let placeholder: null | string = null
  export let value: string
  export let inputmode = 'text'

  $: isValid = value && !error

  const typeMe = (node: HTMLInputElement) => {
    node.type == type
  }
</script>

<div class="field">
  <label for="{attribute}" >
    <i><span class="{icon}"></span></i>
    <span>{label}</span>
    {#if isValid}
    <div in:fly={{ x: 20, duration: 100 }} class="status">
      <i><span class="i-ri:check-fill"></span></i>
    </div>
    {/if}
  </label>
  {#if !textarea}
  <input class:valid={isValid} on:blur={()=>touched=true} {inputmode} {placeholder} size="1" bind:value id="{attribute}" name="{attribute}" use:typeMe type="text">
  {:else}
  <textarea class:valid={isValid} on:blur={()=>touched=true} {inputmode} {placeholder} bind:value id="{attribute}" name="{attribute}" rows="10"></textarea>
  {/if}
  {#if touched && error}
  <div in:fly={{x: -20, duration: 150}} class="error">{error}</div>
  {/if}
</div>

<style>
  .valid {
    border: 1px solid var(--success) !important;
  }
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
  label > i {
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