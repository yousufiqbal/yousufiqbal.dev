<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Field from "$lib/components/Field.svelte";
  import Form from "$lib/components/Form.svelte";
  import Layout from "$lib/components/Layout.svelte";
  import Title from "$lib/components/Title.svelte";
  import { isEmpty } from '$lib/utils.js'
  import { goto } from "$app/navigation";
  import Seo from "$lib/components/Seo.svelte";
  import Card from "$lib/components/Card.svelte";
  import { validateContactForm } from "$lib/validations";
import Loading from "$lib/components/Loading.svelte";

  let wait = false

  const client = {
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  }
  
  let touched = false

  const sendMessage = async () => {
    try {
      wait = 'Sending..'
      await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
      });
      goto('/contact/thank-you')
    } catch (error) {
      alert('Unable to send message. I apologize')
      wait = false
    }
  }
  
  const submit = async () => {
    if (isEmpty(errors)) {
      await sendMessage()
    } else {
      touched = true
    }
  }
  
  $: errors = validateContactForm(client)
</script>

<Seo title="Contact" description="Contact me to avail any web development services and other queries" />

<Container --pd="50px 20px">
  
  <Layout>
    <div slot="main">
      <Title typeEffect icon="ri:mail-send-line" title="Contact" above="Get In Touch" />
      <p style="margin-bottom: 40px;">I try responing to every message unless it is considered spam by everyone.</p>
      <Form>
        <Field {touched} error={errors.name} bind:value={client.name} label="Your Name" icon="ri:user-3-line" placeholder="How do I call you?" />
        <Field {touched} error={errors.email} bind:value={client.email} label="Your Email" type="email" inputmode="email" icon="ri:at-line" placeholder="Where do I reply you?" />
        <Field {touched} error={errors.whatsapp} bind:value={client.whatsapp} label="Your WhatsApp" type="tel" inputmode="tel" icon="ri:whatsapp-line" placeholder="Good for quick chats (Optional)" />
        <Field {touched} error={errors.message} bind:value={client.message} textarea label="Your Message" icon="ri:message-3-line" placeholder="What do you want to talk?" />
      </Form>
      {#if wait}
      <Loading message="Sending Your Message.." />
      {:else}
      <Button on:click={submit} name="{'Send Message'}" type="secondary" icon="ri:mail-send-line" />
      {/if}
    </div>
    <div slot="related">
      <Title title="<span>Three</span> Things" above="Prerequisties" />
        <Card>
          
          <Content>
            <p><em>Do</em> three things before contacting me for website project:</p>
            <ol>
              <li>Read the <a href="/benefits">benefits</a> I provide for websites, this ensures how much goodness you are getting.</li> 
              <li>Read the <a href="/services">services</a> I provide and choose your desired service with the package name after reading details.</li>
              <li>View my <a href="/templates">templates</a> and choose your favorite one as a template for your website.</li>
            </ol>
          </Content>
        </Card>
    </div>
  </Layout>

</Container>

