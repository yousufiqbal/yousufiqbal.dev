<script>
import Icon from "@iconify/svelte";
import Button from "./Button.svelte";
import Card from "./Card.svelte";
import Subtitle from "./Subtitle.svelte";

  export let services = [
    {
      icon: 'ri:user-star-line',
      name: 'Personal Website Development',
      description: 'Personal websites are the best way to introduce your profession. You showcase your education, skills, experiences, testimonies, services with pricings, portfolio and especially a contact-me or hire-me page, so interested people can contact.',
    },
    {
      icon: 'ri:building-2-line',
      name: 'Business Website Development',
      description: 'Got a product to showcase or service to provide? Business website serves this purpose. You showcase product features, your pricings, your clients, the number of your customers, your official addresses, contact us form, news, blogs, etc.',
    },
    {
      icon: 'ri:arrow-go-forward-line',
      name: 'Design Files to Live Website Conversion',
      description: 'Converting design files to live websites always pleases me. Your design file can be from any vector software including but not limited to Figma, Adobe XD, Illustrator, Sketch or even Photoshop (non-vector).',
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
      <Button name="See Pricing" type="secondary" icon="ri:arrow-right-s-line" />
    </div>
  </Card>
  {/each}

</div>

<style>
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin-bottom: 50px;
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
  }
</style>