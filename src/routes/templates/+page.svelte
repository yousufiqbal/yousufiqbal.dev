<script lang="ts">
  
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Templates from "$lib/components/Templates.svelte";
  import Title from "$lib/components/Title.svelte";
  import { templates as originalTemplates } from "$lib/data/templates";
  import fuzzysort from 'fuzzysort'

  let keyword = ''
  let templates: any = []
  
  const filter = () => {
    if (!keyword) return
    templates = fuzzysort.go(keyword, originalTemplates, {key: 'name'}).map(d => ({ ...d.obj } ));
  }

  const handleKey = (e: KeyboardEvent) => {
    if (e.key == 'Enter' || e.key == 'Escape') e.currentTarget?.blur()
  }

  $: if (keyword == '') templates = [...originalTemplates]
</script>

<Seo title="Templates" description="Best template designs to jump start your website from any given web template." />

<Section>

  <div class="dual">
    <Title typeEffect icon="ri:layout-2-line" title="Templates" --mb="0" above="Websites Ideas" />
    <div class="filter-box">
      <i><span class="ri:search-2-line"></span></i>
      <input placeholder="Search Templates" on:keyup={handleKey} size="1" bind:value={keyword} on:keyup={filter} type="text">
      {#if keyword}
      <button on:click={()=>keyword=''} style="display: flex; align-items: center">
        <i><span class="ri:close-line"></span></i>
      </button>
      {/if}
    </div>
  </div>

  {#if templates.length != 0}
  <Templates {templates} />

  {:else}
  <div class="no-templates">
    {#if keyword}
    <p>No Matches. Try other keywords.</p>
    {:else}
    <p>No Templates</p>
    {/if}
  </div>
  {/if}

</Section>

<style>
  i {
    font-size: 20px;
  }
  .dual {
    display: grid;
    gap: 20px;
    /* border: 1px dashed blue; */
    margin-bottom: 40px;
  }
  .filter-box {
    padding-left: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid var(--border);
    background-color: var(--bg);
  }
  input {
    padding: 15px 0;
    flex: 1;
    /* border: 1px dashed red; */
  }
  .filter-box button {
    color: var(--primary);
    padding: 15px;
  }
  button:hover {
    color: red
  }
  ::placeholder {
    color: var(--placeholder);
  }
  .no-templates {
    color: var(--primary);
  }
</style>