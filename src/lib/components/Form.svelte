<form on:submit|preventDefault>
  <slot></slot>
</form>

<style>
  form {
    display: grid;
    gap: 30px;
    margin-bottom: var(--mb, 50px);
  }
</style>