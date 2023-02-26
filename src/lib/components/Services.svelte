<script lang="ts">
  import { services } from "$lib/data/services";
  import Button from "./Button.svelte";

  export let limit: number = Infinity
</script>

<div class="services">

  {#each services as service, index}
  {#if (index+1) <= limit}

  <div class="card service">
    <!-- <i><span class="{service.icon}"></span></i> -->
    <div>
      <div class="subtitle">{service.subtitle}</div>
      <h2>{service.title}</h2>
    </div>
    <p class="description">
      {service.description}
    </p>
    <Button name="See Benefits & Pricing" type="outline" href="/services/{service.urlName}" />
  </div>

  {/if}
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
  .subtitle {
    margin-bottom: 5px;
    color: var(--success);
    font-weight: bold;
  }
</style>