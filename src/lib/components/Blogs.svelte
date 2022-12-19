<!-- <script lang="ts">
  import { blogs } from "$lib/data/blogs";

  export let limit: number = Infinity
</script>

<div class="blogs">

  {#each blogs as blog, index}
  {#if (index+1) <= limit}

  <div class="card blog">
    <h2>{blog.name}</h2>
    <p class="description">
      {blog.description}
    </p>
    <div class="tags">
      {#each blog.tags as tag}
      <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>

  {/if}
  {/each}

</div>

<style>
  .blogs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .blog {
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
</style> -->