<script>
  import Icon from "@iconify/svelte";
  import Card from "./Card.svelte";
  import Subtitle from "./Subtitle.svelte";

  export let benefits = []
</script>

{#if benefits.length != 0}
<div class="benefits">
  
  {#each benefits as benefit}
  <Card>
    <div class="benefit">
      {#if benefit.bookmark}
      <div class="bookmark">
        <Icon icon="ri:bookmark-fill" />
        <!-- <span>02</span> -->
      </div>
      {/if}
      <i>
        <Icon icon="{benefit.icon}" />
      </i>
      <Subtitle above="{benefit.above}" subtitle="{benefit.title}" />
      <p class="description">
        {benefit.description}
      </p>
    </div>
  </Card>
  {/each}
  
</div>
{/if}

 <style>
  .benefits {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .benefit {
    /* border: 1px dashed blue; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  /* .benefit:hover i {
    color: var(--primary);
  } */
  .bookmark {
    font-size: 50px;
    position: absolute;
    top: -10px; right: 20px;
    color: var(--secondary);
    /* position: relative; */
    /* opacity: 0.5; */
  }
  /* .bookmark span {
    font-size: 15px;
    color: var(--on-secondary);
    left: 18px; top: 12px;
    position: absolute;
  } */
  i {
    /* transition: color 400ms; */
    /* justify-content: end; */
    font-size: 60px;
  }
  /* p {
    border: 1px dashed green;
    flex-grow: 1;
  } */
 </style>