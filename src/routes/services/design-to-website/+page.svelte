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
    { name: 'Design To Website', href: '/services/design-to-website' },
  ]
</script>

<Seo title="Design To Website" description="I provide three services: 1. Personal website, 2. Business website and 3. Design to website development" />

<Section>
  <Breadcrumbs {crumbs} />
  <Title title="<span>Design To</span> Website" />
  <Content>
    <p>
      Converting design files to live websites always pleases me. Your design file can be from any vector software including but not limited to Figma, Adobe XD, Illustrator, Sketch or even Photoshop (non-vector).
    </p>
    <p>There are three plans for Design to Website conversion:</p>
    <ol>
      <li>Basic</li>
      <li>Standard</li>
      <li>Premium</li>
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
  <Subtitle above="Clarity" subtitle="Limitations" />
  <Content>
    <ol>
      <li>Each page has a limit of 4 sections per page</li>
      <li>When pages limit surpass, subsequent pages will be charged $&nbsp;20.00 per page</li>
      <li>Free email is for one account only</li>
      <li>Contact Form is a page where users interested can send you a message. You receive this message inside your custom domain email which is provided for free. (Not included in the basic plan)</li>
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
