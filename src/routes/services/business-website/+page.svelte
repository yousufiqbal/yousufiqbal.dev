<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Content from "$lib/components/Content.svelte";
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

<Seo title="Business Website" description="I develop business webistes. They are great in showcasing your products and services." />

<Section>
  <Breadcrumbs {crumbs} />
  <Title title="<span>Business</span> Website" />
  <Content>
    <p>
      Got a product to showcase or service to provide? Business website serves this purpose. You showcase product features, your pricings, your clients, the number of your customers, your official addresses, contact us form, news, blogs, etc.
    </p>
    <p>There are four plans for Business Website:</p>
    <ol>
      <li>Basic</li>
      <li>Standard</li>
      <li>Premium</li>
      <li>Guru</li>
    </ol>
  </Content>
  <Subtitle above="01" subtitle="Basic" --mb="30px" />
  <Table>
    <tr>
      <th>Pages</th>
      <td>1</td>
    </tr>
    <tr>
      <th>Customization</th>
      <td>No</td>
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
      <td>No</td>
    </tr>
    <tr>
      <th>Price</th>
      <td>$ 50.00</td>
    </tr>
  </Table>
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
  <Subtitle above="03" subtitle="Premium" --mb="30px" />
  <Table>
    <tr>
      <th>Pages</th>
      <td>5</td>
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
  <Subtitle above="03" subtitle="Guru" --mb="30px" />
  <Table>
    <tr>
      <th>Pages</th>
      <td>5</td>
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
  <Subtitle above="Clarity" subtitle="Limitations" />
  <Content>
    <ol>
      <li>Each page has a limit of 4 sections per page</li>
      <li>When pages limit surpass, subsequent pages will be charged $&nbsp;20.00 per page</li>
      <li>Free email is for one account only</li>
      <li>Contact Form is a page where users interested can send you a message. You receive this message inside your custom domain email which is provided for free. (Not included in the basic plan)</li>
      <li>Guru plan includes fully customized design which is copyrighted to business owners. This results in a price increase</li>
    </ol>
  </Content>
</Section>

<style>
  tr:last-child {
    font-weight: 500;
  }
  tr:last-child th {
    color: var(--primary);
  }
  tr:last-child td {
    color: var(--success);
  }
</style>
