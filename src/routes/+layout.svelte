<script>
  import '$lib/styles/reset.css'
  import '$lib/styles/variables.css'
  import '$lib/styles/global.css'
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  
  afterNavigate(() => {
    window.goatcounter.count({
      path: $page.url.pathname
    })
  })
</script>

<slot></slot>