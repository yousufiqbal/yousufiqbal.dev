<script>
  export let title, description
  export let fixed = ' - Yousuf Iqbal'
</script>

<svelte:head>
  <title>{title}{fixed}</title>
  <meta name="description" content="{description}">
</svelte:head>