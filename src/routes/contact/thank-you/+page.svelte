<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Meta title="Message Sent" description="Your message has been sent to me. You may soon receive a reply" />

<Container --pd="50px 30px">
  <Title icon="i-ri:check-double-line" title="Message Sent" above="Thankyou" />
  <Content>
    <p>Your message has been sent. Whether I'm available for a project or not. I'll reply in both scenarios in-sha-Allah.</p>
  </Content>
  <Button type="outline" name="Go Back Home" href="/" --mb="40px" icon="i-ri:home-3-line" />
</Container>