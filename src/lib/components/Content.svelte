<div class="content">
  <slot></slot>
</div>

<style global>
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
  ol {
    display: grid;
    gap: 5px;
    list-style-type: decimal;
    list-style-position: inside;
  }
  ol li::before {
    content: "";
    width: 5px;
    display: inline-block;
  }
  ol > li::marker {
    font-weight: 500;
  }
</style>