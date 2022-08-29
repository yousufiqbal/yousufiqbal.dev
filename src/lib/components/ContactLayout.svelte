<div class="layout">
  <slot name="main"></slot>
  <slot name="related"></slot>
</div>

<style>
  .layout {
    /* border: 1px dashed red; */
    display: grid;
    gap: 50px;
  }
  @media (min-width: 900px) {
    .layout {
      grid-template-columns: 4fr 2fr;
    }
  }
</style>