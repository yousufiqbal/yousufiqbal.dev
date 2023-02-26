<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Content from "$lib/components/Content.svelte";
  import Layout from "$lib/components/Layout.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Services from "$lib/components/Services.svelte";
  import Title from "$lib/components/Title.svelte";
  import { whatsapp } from "$lib/data/links";
  import { services } from "$lib/data/services";

  let index = $page.url.pathname.lastIndexOf('/')
  let urlName = $page.url.pathname.substr(index+1)
  let service = services.filter(s => s.urlName == urlName)[0]
</script>

<Seo title="{service.title}" description={service.description} />

<section>
  <Layout>

    <div slot="main">
      <Title icon="i-ri:arrow-left-right-line" title="{service.title}" above="{service.subtitle}" typeEffect={true} />
      
      <Content>
        <img src="/{service.urlName}.jpg" alt="">
  
        <slot></slot>
      </Content>

      <div class="buttons">
        <Button href="{whatsapp}" name="Contact Through WhatsApp" type="outline" />
        <Button href="/contact" name="Contact Through Email" type="outline" />
      </div>
  
    </div>

    <div slot="related">
      <Title title="Other Services" above="More Services" icon="i-ri:list-check-2" />
      <Services />
    </div>

  </Layout>
</section>

<style>
  section {
    max-width: 1150px;
    margin: 0 auto;
    padding: 50px 20px;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>