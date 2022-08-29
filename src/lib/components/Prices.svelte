<div class="prices">
  <slot></slot>
</div>

<style global>
  .prices .hide {
    display: none;
  }
  .prices {
    display: grid;
    /* border: 1px dashed red; */
  }
  @media (min-width: 800px) {
    .prices .hide {
      display: initial;
    }
    .prices tr {
      white-space: nowrap;
    }
    .prices .price:not(:first-child) th {
      display: none;
    }
    .prices {
      grid-template-columns: repeat(var(--columns, 4), 1fr);
    }
  }
</style>