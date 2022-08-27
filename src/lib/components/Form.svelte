<form on:submit|preventDefault>
  <slot></slot>
</form>

<style>
  form {
    display: grid;
    gap: 40px;
    margin-bottom: 50px;
  }
</style>