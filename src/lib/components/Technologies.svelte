<script>
  import Card from "$lib/components/Card.svelte";
  import { technologies } from "$lib/data/technologies";
</script>

{#if technologies.length != 0}
<div class="technologies">
  
  {#each technologies as technology}
  <Card>
    
    <div class="technology">
      <h3 class="name">{technology.name}</h3>
      <p class="description">
        {technology.description}
      </p>
    </div>
    
  </Card>
  {/each}
  
</div>
{/if}

<style>
  .technologies {
    /* border: 1px dashed red; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .technology {
    /* border: 1px dashed blue; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    /* line-height: 1; */
  }
  /* i {
    color: var(--primary);
    font-size: 60px;
  } */
  p {
    /* border: 1px dashed green; */
    flex: 1;
    /* margin-bottom: 15px; */
  }
</style>