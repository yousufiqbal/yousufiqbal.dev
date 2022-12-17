<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";
  import type { Services } from "src/app";
  
  export let services: Services = []
</script>

<div class="services">

  {#each services as service}
  <Card>
    <div class="service">
      <i><span class="{service.icon}"></span></i>
      <h2>{service.name}</h2>
      <p class="description">
        {service.description}
      </p>
      <div class="button">
        <Button type="secondary" name="See Pricing" icon="ri:arrow-right-s-line" href="/services/{service.href}" />
      </div>
    </div>
  </Card>
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
    /* border: 1px dashed blue; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    /* line-height: 1; */
  }
  i {
    color: var(--primary);
    font-size: 60px;
  }
  p {
    /* border: 1px dashed green; */
    flex: 1;
    margin-bottom: 15px;
  }
  .button {
    display: flex;
    justify-content: end;
  }
  @media (min-width: 600px) {
    .button {
      justify-content: start;
    }

  }
</style>