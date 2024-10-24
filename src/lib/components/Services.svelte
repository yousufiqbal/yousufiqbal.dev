<script lang="ts">
  import type { PageData } from "./$types";
  import Button from "$lib/components/Button.svelte";
  import { page } from "$app/stores";

  export let data: PageData
</script>

<div class="services">

  {#each $page.data.services as service}

  <div class="card service">
    <!-- <i><span class="{service.icon}"></span></i> -->
    <div>
      <div class="subtitle">{service.name}</div>
      <h2>{service.title}</h2>
    </div>
    <p class="description">
      {service.description}
    </p>
    <Button name="Contact Me" type="outline" href="/contact" />
  </div>

  {/each}

</div>

<style>
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  p {
    /* border: 1px dashed red; */
    flex: 1;
  }
  .subtitle {
    margin-bottom: 5px;
    color: var(--success);
    font-weight: bold;
  }
</style>