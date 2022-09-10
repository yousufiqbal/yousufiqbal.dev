<script>
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

  const crumbs = [
    { name: 'Services', href: '/services' },
    { name: 'Business Website', href: '/services/business-website' },
  ]
</script>

<Seo title="Business Website" description="I develop business websites. They are great in showcasing your products and service to the world" />

<Section>

  <Breadcrumbs {crumbs} />

  <Title title="<span>Business</span> Website" />
  <Content>
    <p>
      <em>Business</em> websites are the best way to introduce your profession. You showcase product features, pricings, clients, customers, your official addresses, contact-us form, news, blogs, etc., so people can know your product better and contact.
    </p>
    <p>There are three plans for Business Websites:<br>
      Basic, Standard & Premium</p>
  </Content>

  <Prices --columns="5">
    <div class="price hide">
      <Subtitle above="&nbsp;" subtitle="&nbsp;" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
        </tr>
        <tr>
          <th>Customization</th>
        </tr>
        <tr>
          <th>Web Hosting</th>
        </tr>
        <tr>
          <th>SSL Certificate</th>
        </tr>
        <tr>
          <th>Custom Email</th>
        </tr>
        <tr>
          <th>Content Upload</th>
        </tr>
        <tr>
          <th>Contact Form</th>
        </tr>
        <tr>
          <th>Price</th>
        </tr>
      </Table>
    </div>
    <div class="price">

      <Subtitle above="01" subtitle="Basic" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
          <td>1</td>
        </tr>
        <tr>
          <th>Customization</th>
          <td class="no">No</td>
        </tr>
        <tr>
          <th>Web Hosting</th>
          <td>Free (100GB)</td>
        </tr>
        <tr>
          <th>SSL Certificate</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Custom Email</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Content Upload</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Contact Form</th>
          <td class="no">No</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$ 80.00</td>
        </tr>
      </Table>
    </div>
    <div class="price">
      <Subtitle above="02" subtitle="Standard" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
          <td>3</td>
        </tr>
        <tr>
          <th>Customization</th>
          <td>Mini</td>
        </tr>
        <tr>
          <th>Web Hosting</th>
          <td>Free (100GB)</td>
        </tr>
        <tr>
          <th>SSL Certificate</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Custom Email</th>
          <td>Free (5GB)</td>
        </tr>
        <tr>
          <th>Content Upload</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Contact Form</th>
          <td>Yes</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$ 150.00</td>
        </tr>
      </Table>
    </div>
    <div class="price">

      <Subtitle above="03" subtitle="Premium" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
          <td>5 (Save $ 20.00)</td>
        </tr>
        <tr>
          <th>Customization</th>
          <td>Mini</td>
        </tr>
        <tr>
          <th>Web Hosting</th>
          <td>Free (100GB)</td>
        </tr>
        <tr>
          <th>SSL Certificate</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Custom Email</th>
          <td>Free (5GB)</td>
        </tr>
        <tr>
          <th>Content Upload</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Contact Form</th>
          <td>Yes</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$ 180.00</td>
        </tr>
      </Table>
    </div>

    <div class="price">
      <Subtitle above="03" subtitle="Guru" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
          <td>8</td>
        </tr>
        <tr>
          <th>Customization</th>
          <td>Full</td>
        </tr>
        <tr>
          <th>Web Hosting</th>
          <td>Free (100GB)</td>
        </tr>
        <tr>
          <th>SSL Certificate</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Custom Email</th>
          <td>Free (5GB)</td>
        </tr>
        <tr>
          <th>Content Upload</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Contact Form</th>
          <td>Yes</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$ 500.00 *</td>
        </tr>
      </Table>
    </div>
  </Prices>

  <Content>
    <p>* GURU plan includes fully customized design which is copyrighted to business owners. This results in a price increase.</p>
  </Content>

  <Button type="outline" name="Interested? Contact Me" href="/contact" --mb="40px" icon="ri:mail-send-line" />
 
  <Limitations price="30" />

</Section>


