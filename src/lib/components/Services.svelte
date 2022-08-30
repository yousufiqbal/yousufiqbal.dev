<script>
import { kebabCase } from "$lib/utils";

import Icon from "$lib/components/Icon.svelte";
import Button from "$lib/components/Button.svelte";
import Card from "$lib/components/Card.svelte";

  export let services = [
    {
      icon: 'ri:user-star-line',
      name: 'Personal Website Development',
      href: 'personal-website',
      description: 'Personal websites are the best way to introduce your profession. Showcase your education, skills, experiences so interested people can contact.',
    },
    {
      icon: 'ri:building-2-line',
      name: 'Business Website Development',
      href: 'business-website',
      description: 'Business websites provide the best way to share you product and services with open world. Showcase your products & services so interested people can contact.',
    },
    {
      icon: 'ri:arrow-go-forward-line',
      name: 'Design Files to Live Website Conversion',
      href: 'design-to-website',
      description: 'Converting design files to live websites always pleases me. Your design file can be from any vector software including but not limited to Figma, XD, Illustrator or Sketch.',
    },
  ]
</script>

<div class="services">

  {#each services as service}
  <Card>
    <div class="service">
      <i><Icon icon={service.icon} /></i>
      <h2>{service.name}</h2>
      <p class="description">
        {service.description}
      </p>
      <div class="button">
        <Button type="secondary" name="See Pricing" icon="ri:arrow-right-s-line" href="/services/{service.href}" />
      </div>
    </div>
  </Card>
  {/each}

</div>

<style>
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .service {
    /* border: 1px dashed blue; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    /* line-height: 1; */
  }
  i {
    color: var(--primary);
    font-size: 60px;
  }
  p {
    /* border: 1px dashed green; */
    flex: 1;
    margin-bottom: 15px;
  }
  .button {
    display: flex;
    justify-content: end;
  }
  @media (min-width: 600px) {
    .button {
      justify-content: start;
    }

  }
</style>