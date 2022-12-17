<script lang="ts">
  import { projects } from "$lib/data/projects";

  export let limit: number = Infinity
</script>

<div class="projects">

  {#each projects as project, index}
  {#if (index+1) <= limit}

  <div class="card project">
    <h2>{project.name}</h2>
    <p class="description">
      {project.description}
    </p>
    <div class="tags">
      {#each project.tags as tag}
      <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>

  {/if}
  {/each}

</div>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .project {
    /* border: 1px dashed blue; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .tag {
    font-size: 14px;
    padding: 7px 10px;
    border: 1px solid var(--primary);
    border-radius: 10px;
  }
  /* @media (min-width: 600px) {
    .button {
      justify-content: start;
    }
  } */
</style>