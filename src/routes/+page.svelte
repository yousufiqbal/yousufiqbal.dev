<script>
  import Button from "$lib/components/Button.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Section from "$lib/components/Section.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Title from "$lib/components/Title.svelte";
  import Products from "$lib/components/Products.svelte";
  import Technologies from "$lib/components/Technologies.svelte";
  import Services from "$lib/components/Services.svelte";
</script>

<Meta title="Home" description="Using modern technologies, I design and develop websites that are responsive, sleek, performant and Meta friendly." />

<Hero />

<Section> 

  <!-- Services -->
  <Title icon="i-ri:list-check-2" title="Services" />
  <Services />
  <Button type="secondary" name="See All Services" href="/services" --mb="70px" />

  <!-- Products -->
  <Title icon="i-ri:briefcase-2-line" title="Products" />
  <Products />
  <Button type="secondary" name="See All Products" href="/products" --mb="70px" />
  
  <!-- Technologies -->
  <Title icon="i-ri:stack-line" title="Technologies" />
  <Technologies />
  <Button name="See All Technologies" type="secondary" href='/technologies' --mb="70px" />

</Section>