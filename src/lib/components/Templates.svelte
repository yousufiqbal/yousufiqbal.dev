<script>
  import Card from "$lib/components/Card.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Button from "$lib/components/Button.svelte";
  import { templates } from "$lib/templates";

</script>

{#if templates.length != 0}
<div class="templates">
  
  {#each templates as template}
  <div class="template">

    <a href="/templates/{template.from}-{template.name}">
      <img loading="lazy" src="/templates/{template.name}.png" alt="{template.name} website template">
    </a>
    <div class="details">
      <h2>{template.name}</h2>
      <div class="button">
        <Button name="Live Demo" type="secondary" href="/templates/{template.from}-{template.name}" />
      </div>
    </div>

  </div>
  {/each}
  
</div>
{/if}

<style>
  .templates {
    /* border: 1px dashed green; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .template {
    border-radius: var(--radius);
    /* border: 1px dashed var(--above-below); */
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow);
    /* gap: 20px; */
  }
  /* .template:hover {
    box-shadow: 0 0 25px 0 rgb(0, 0, 0, 0.1);
  } */
  .template a {
    display: flex;
    border-bottom: 1px solid var(--border);
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .button {
    display: flex;
  }
  h2 {
    color: var(--primary);
    font-size: 25px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 1.17 / 1;
    flex: 1;
    object-fit: cover;
  }
</style>