<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Field from "$lib/components/Field.svelte";
  import Form from "$lib/components/Form.svelte";
  import Layout from "$lib/components/Layout.svelte";
  import Title from "$lib/components/Title.svelte";
  import { isEmpty } from '$lib/utils.js'
  import { goto } from "$app/navigation";
  import Seo from "$lib/components/Seo.svelte";
  import { validateContactForm } from "$lib/validations";
  import Loading from "$lib/components/Loading.svelte";
  import Section from "$lib/components/Section.svelte";
    import Services from "$lib/components/Services.svelte";

  let wait: null | string = null

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
      wait = null
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

<Seo title="Contact" description="Contact me to avail any web development services and for other queries" />

<Section>
  
  <Layout>

    <div slot="main">
      <Title typeEffect icon="i-ri:mail-send-line" title="Contact" above="Get In Touch" />
      <p style="margin-bottom: 40px;">I try responing to every message unless it is considered spam by everyone.</p>
      <Form>
        <Field {touched} error={errors.name} bind:value={client.name} label="Your Name" icon="i-ri:user-3-line" placeholder="How do I call you?" />
        <Field {touched} error={errors.email} bind:value={client.email} label="Your Email" type="email" inputmode="email" icon="i-ri:at-line" placeholder="Where do I reply you?" />
        <Field {touched} error={errors.whatsapp} bind:value={client.whatsapp} label="Your WhatsApp" type="tel" inputmode="tel" icon="i-ri:whatsapp-line" placeholder="Good for quick chats (Optional)" />
        <Field {touched} error={errors.message} bind:value={client.message} textarea label="Your Message" icon="i-ri:message-3-line" placeholder="What do you want to talk?" />
      </Form>
      {#if wait}
      <Loading message="Sending Your Message.." />
      {:else}
      <Button on:click={submit} name="{'Send Message'}" type="secondary" icon="i-ri:mail-send-line" />
      {/if}
    </div>

    <div slot="related">
      <Title title="Services" above="Things I Do" icon="i-ri:list-check-2" />
      <Services />
    </div>

  </Layout>

</Section>

