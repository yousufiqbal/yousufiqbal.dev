<script lang="ts">
  import { technologies } from "$lib/data/technologies";

  export let limit: number = Infinity
</script>

{#if technologies.length != 0}
<div class="technologies">
  
  {#each technologies as technology, index}
  {#if (index+1) <= limit}

    <div class="card technology">
      <h2 class="name">{technology.name}</h2>
      <p class="description">
        {technology.description}
      </p>
    </div>

  {/if}
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
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  /* i {
    color: var(--primary);
    font-size: 60px;
  } */
</style>