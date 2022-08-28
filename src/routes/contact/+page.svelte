<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Field from "$lib/components/Field.svelte";
  import Form from "$lib/components/Form.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Container --mw="800px" --pd="50px 20px">

  <Title icon="ri:mail-send-line" title="Contact" above="Get In Touch" />

  <Content>
    <p>
      I try responing to every message unless it is considered spam by everyone
    </p>
  </Content>

  <Form>
    <Field label="Name" icon="ri:user-3-line" placeholder="How do I call you?" />
    <Field label="Email" type="email" inputmode="email" icon="ri:at-line" placeholder="Where do I reply you?" />
    <Field label="WhatsApp No." type="tel" inputmode="tel" icon="ri:whatsapp-line" placeholder="Good for quick chats" />
    <Field textarea label="Message" icon="ri:message-3-line" placeholder="What do you want to talk?" />
  </Form>

  <Button name="Send Message" type="secondary" icon="ri:mail-send-line" />
  <div style="margin-bottom: 50px"></div>
</Container>