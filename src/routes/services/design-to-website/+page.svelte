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
    { name: 'Design To Website', href: '/services/personal-website' },
  ]
</script>

<Seo title="Design To Website" description="Are you a designer? That's great because I can convert your designs to live websites in no time. AlhamduLILLAH" />

<Section>

  <Breadcrumbs {crumbs} />

  <Title title="<span>Design Files</span> to Website" />

  <Content>
    <p>
      Converting design files to live websites always pleases me. Your design file can be from any vector software including but not limited to Figma, Adobe XD, Illustrator & Sketch.
    </p>
    <p>There are three plans for Design Files to Website Conversion:<br>
      Basic, Standard & Premium</p>
  </Content>

  <Prices class="prices">
    <div class="price hide">
      <Subtitle above="&nbsp;" subtitle="&nbsp;" --mb="30px" />
      <Table>
        <tr>
          <th>Pages</th>
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
          <th>Web Hosting</th>
          <td>Free (100GB)</td>
        </tr>
        <tr>
          <th>SSL Certificate</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Custom Email</th>
          <td class="no">Free</td>
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
          <td>$ 100.00</td>
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
  </Prices>

  <Button type="outline" name="Interested? Contact Me" href="/contact" --mb="40px" icon="ri:mail-send-line" />
 
  <Limitations price="25" />

</Section>


