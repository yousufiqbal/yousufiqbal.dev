<script>
  import Button from "$lib/components/Button.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Section from "$lib/components/Section.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Title from "$lib/components/Title.svelte";
  import Cards from "$lib/components/Cards.svelte";
    import Card from "$lib/components/Card.svelte";
    import Subtitle from "$lib/components/Subtitle.svelte";
    import Content from "$lib/components/Content.svelte";

  export let data
</script>

<Meta title="Home" description="Using modern technologies, I design and develop websites that are responsive, sleek, performant and Meta friendly." />

<Hero />

<Section> 
   

  <!-- Services -->
  <Title icon="i-ri:list-check-2" title="Services" />
  <Cards>
    {#each data.services as service}
    <Card>
      <Subtitle subtitle="{service.name}" />
      <Content>{@html service.description}</Content>
    </Card>  
    {/each}
  </Cards>
  <Button type="secondary" name="See All Services" href="/services" --mb="70px" />

  <!-- Products -->
  <Title icon="i-ri:briefcase-2-line" title="Products" />
  <Cards>
    {#each data.products as product}
    <Card>
      <Subtitle subtitle="{product.name}" />
      <Content>{@html product.description}</Content>
    </Card>  
    {/each}
  </Cards>
  <Button type="secondary" name="See All Products" href="/products" --mb="70px" />
  
  <!-- Technologies -->
  <Title icon="i-ri:stack-line" title="Technologies" />
  <Cards>
    {#each data.techs as tech}
    <Card>
      <Subtitle subtitle="{tech.name}" />
      <Content>{@html tech.description}</Content>
    </Card>  
    {/each}
  </Cards>
  <Button name="See All Technologies" type="secondary" href='/technologies' --mb="70px" />

</Section>