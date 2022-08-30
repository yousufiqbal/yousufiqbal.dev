<script>
  import Card from "$lib/components/Card.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<div class="templates">

  {#each Array(6) as item}
  <Card --pd="0">
    <div class="template">
      <img src="/template.jpg" alt="Rayyan Minima Template Website">
      <div class="details">
        <Subtitle above="Personal Website" subtitle="Rayyan Minima" --mb="15px" />
        <div class="button">
          <Button name="Live Demo" type="primary" />
        </div>
      </div>
    </div>
  </Card>
  {/each}

</div>

<style>
  .templates {
    /* border: 1px dashed green; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .template {
    /* border: 1px dashed red; */
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .button {
    display: flex;
  }
  img {
    object-fit: cover;
  }
</style>