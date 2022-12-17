<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { projects } from "$lib/data/projects";
</script>

<div class="projects">

  {#each projects as project}
  <Card>
    <div class="project">
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
  </Card>
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
  h2 {
    font-weight: 500;
    font-size: 26px;
    /* line-height: 1; */
  }
  p {
    /* border: 1px dashed green; */
    flex: 1;
    margin-bottom: 15px;
  }
  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .tag {
    padding: 7px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }
  /* @media (min-width: 600px) {
    .button {
      justify-content: start;
    }
  } */
</style>