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

    <a rel="external" target="_blank" href="https://gpsites.co/{template.name}">
      <img src="/templates/{template.name}.png" alt="{template.name} website template">
    </a>
    <div class="details">
      <h2>{template.name}</h2>
      <div class="button">
        <Button name="Live Demo" type="secondary" external href="https://gpsites.co/{template.name}" target />
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
  .template a {
    display: flex;
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
    /* max-height: 200px; */
    flex: 1;
    object-fit: cover;
  }
</style>