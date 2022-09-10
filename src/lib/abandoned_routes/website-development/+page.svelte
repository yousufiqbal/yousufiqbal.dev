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
    { name: 'Personal Website', href: '/services/personal-website' },
  ]
</script>

<Seo title="Personal Website" description="I develop personal websites. They are great in showcasing your professional life including education, experiences and skills" />

<Section>

  <Breadcrumbs {crumbs} />

  <Title title="<span>Personal</span> Website" />
  <Content>
    <p>
      <em>Personal</em> websites are the best way to introduce your profession. You showcase your education, skills, experiences, testimonies, services with pricings, portfolio and especially a contact-me or hire-me page, so interested people can contact.
    </p>
    <p>There are three plans for Personal Websites:<br>
      Basic, Standard & Premium</p>
  </Content>

  <Prices>
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
          <td>$ 50.00</td>
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
          <td>$ 100.00</td>
        </tr>
      </Table>
    </div>
    <div class="price">

      <Subtitle above="03" subtitle="Premium" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
          <td>5 (Save $ 10.00)</td>
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
          <td>$ 130.00</td>
        </tr>
      </Table>
    </div>
  </Prices>

  <Button type="outline" name="Interested? Contact Me" href="/contact" --mb="40px" icon="ri:mail-send-line" />
 
  <Limitations price="20" />

</Section>
