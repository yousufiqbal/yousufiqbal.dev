<script>
  export let title, description
  export let fixed = ' - Yosof Iqbal'
</script>

<svelte:head>
  <title>{title}{fixed}</title>
  <meta name="description" content="{description}">
</svelte:head>