<div class="content">
  <slot></slot>
</div>

<style global>
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* margin-bottom: 40px; */
    /* max-width: 600px; */
  }
  .content ol {
    display: grid;
    gap: 10px;
    list-style-type: decimal;
    list-style-position: inside;
  }
  .content ol li::before {
    content: "";
    width: 5px;
    display: inline-block;
  }
  .content ol > li::marker {
    font-weight: 500;
  }
  .content h2 {
    font-weight: bold;
    font-size: 26px;
    margin-top: 20px;
  }
  .content a {
    display: inline-flex;
    color: var(--primary);
    text-decoration: underline;
  }
  .content a:hover {
    color: var(--success);
  }
  .content p {
    line-height: 1.5;
  }
  .content em {
    font-weight: bold;
  }
</style>