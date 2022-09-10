<script>
  import { page } from "$app/stores";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Button from "$lib/components/Button.svelte";
  import Content from "$lib/components/Content.svelte";
  import Limitations from "$lib/components/Limitations.svelte";
  import Prices from "$lib/components/Prices.svelte";
  import Section from "$lib/components/Section.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Subtitle from "$lib/components/Subtitle.svelte";
  import Table from "$lib/components/Table.svelte";
  import Title from "$lib/components/Title.svelte";
  import { services } from "$lib/data/services";
import { currency } from "$lib/stores";

  let service = services.filter(service => service.href == $page.params.name)[0]
  let attributes = Object.keys(service.packages[0].attributes)

  const crumbs = [
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.href}` },
  ]
</script>

<Seo title="{service.name}" description="I develop personal websites. They are great in showcasing your professional life including education, experiences and skills" />

<Section>

  <Breadcrumbs {crumbs} />

  <Title title="{service.name}" />
  <Content>
    <p>{service.description}</p>
  </Content>

  <Prices>

    <div class="price hide">
      <Subtitle above="&nbsp;" subtitle="&nbsp;" --mb="30px" />
      <Table>
        {#each attributes as attribute}
        <tr>
          <th>{attribute}</th>
        </tr>
        {/each}
      </Table>
    </div>
    
    {#each service.packages as pack, index}
    <div class="price">

      <Subtitle above="0{index+1}" subtitle="{pack.name}" --mb="30px" />

      <Table>
        {#each attributes as attribute}
        <tr>
          <th>{attribute}</th>
          {#if attribute != 'Price'}
          <td>{pack.attributes[attribute]}</td>
          {:else}
          <td>{pack.attributes[attribute][$currency]}</td>
          {/if}
        </tr>
        {/each}
      </Table>

    </div>
    {/each}
  </Prices>

  <Button type="outline" name="Interested? Contact Me" href="/contact" --mb="40px" icon="ri:mail-send-line" />
 
  <Limitations price="20" />

</Section>
