<script lang="ts">
  import { services } from "$lib/data/services";

  export let limit: number = Infinity
</script>

<div class="services">

  {#each services as service, index}
  {#if (index+1) <= limit}

  <div class="card service">
    <!-- <i><span class="{service.icon}"></span></i> -->
    <h2>{service.name}</h2>
    <p class="description">
      {service.description}
    </p>
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
</style>