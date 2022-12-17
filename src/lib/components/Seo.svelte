<script lang="ts">
  export let title: string
  export let description: string
  export let fixed = 'Yousuf Iqbal'
</script>

<svelte:head>
  <title>{title} - {fixed}</title>
  <meta name="description" content="{description}">
</svelte:head>