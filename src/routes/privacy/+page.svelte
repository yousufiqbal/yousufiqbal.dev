<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
import Seo from "$lib/components/Seo.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Seo title="Privacy" description="All privacy policies related to client and common users" />

<Container --pd="50px 30px">
  <Button type="outline" name="Go Back Home" href="/" --mb="40px" icon="ri:home-3-line" />
  <Title typeEffect icon="ri:git-repository-private-line" title="Privacy" above="Policies" />

  <Content>
    <h2>Clients Related</h2>
    <p>All client data including name, email, contact, etc. is private. It is not shared with any other person or third-party.</p>
    <h2>Web Visitors Related</h2>
    <p>The following information is collected:</p>
    <ol>
      <li>Visited page URL</li>
      <li>Referer header</li>
      <li>User-Agent header</li>
      <li>Screen size</li>
      <li>Country & Region name, based on hashed IP address</li>
    </ol>
    <p>The following information is not collected:</p>
    <ol>
      <li>Personal information like IP address</li>
      <li>The hashed IP address is kept in process memory for 8 hours to identify a browsing session and is never stored on the disk.</li>
      <li>There is no information stored in the browser with cookies, localStorage, or other methods.</li>
      <li>No information is shared with third parties</li>
    </ol>
    <h2>GDPR Consent</h2>
    <p>YosofIqbal.com doesn't require a GDPR consent notice because no personally identifiable information is collected.</p>
  </Content>
  
</Container>