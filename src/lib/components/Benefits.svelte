<script>
  import Icon from "@iconify/svelte";
  import Subtitle from "./Subtitle.svelte";

  let benefits = [
    {
      icon: 'ri:device-line',
      above: '100%',
      title: 'Responsive Design',
      description: 'All of the designs are developed with responsiveness in mind. They look aesthetically correct on Smartphones, Tablets and Desktop PCs. This ensures that all of your website content is accessible and pleasing at the same time.'
    },
    {
      icon: 'ri:flashlight-line',
      above: 'Speed',
      title: 'App Like Experience',
      description: 'Ever used an android app? You definitely have felt how snappy navigation happens in an app. My designs deliver nearly app-like navigation. Thanks to SvelteJS & SvelteKit by Rich Harris for one of the fastest web frameworks.'
    },
    {
      icon: 'ri:server-line',
      above: '$ 0.00',
      title: 'Free Website Hosting',
      description: 'Since I develop websites using serverless technologies. They are eligible for free hosting for upto 100GB bandwidth on Netlify. It is rare for a portfolio or business website to surpass this limit.'
    },
    {
      icon: 'ri:mail-send-line',
      above: '$ 0.00',
      title: 'Free Email',
      description: 'Like contact@mydomain.com you get one free email powered by ZOHO Mail of 5GB. This helps you respond to messages that are sent from the ‘Contact Me’ or ‘Hire Me’ page from your official domain. You can easily install the ZOHO email application on your phone and respond to emails on the go.'
    },
    {
      icon: 'ri:upload-cloud-line',
      above: '$ 0.00',
      title: 'Free Content Upload',
      description: 'After development of your website, there are zero charges for content upload of your website to Netlify. Like hosting and email, this is also free. This also includes the DNS setting of your domain. '
    },
    {
      icon: 'ri:lock-2-line',
      above: '$ 0.00',
      title: 'Free HTTPS',
      description: 'Ever had to pay for SSL certificates? Not anymore. All of your web traffic is secured using Let’s Encrypt certificate. This ensures that all transmitted data is safe on the internet from prying eyes.'
    },
    {
      icon: 'ri:line-chart-line',
      above: 'Standout',
      title: 'Best Lighthouse Score',
      description: 'Nowadays, developers check and audit their website performance using Google Lighthouse. It gives results in numerics from 0-100. I promise a whopping 100 score for SEO, Accessibility & Best Practices, and 90+ score for performance.'
    },
    {
      icon: 'ri:arrow-left-right-line',
      above: 'Action - Reaction',
      title: 'Faster Builds',
      description: 'If you add or edit the content of your website from me. The changes are reflected in under 2 minutes on your website after addition or editing. Netlify builds websites automatically on changes.'
    },
    {
      icon: 'ri:shield-keyhole-line',
      above: 'Secured',
      title: 'Cloudflare Fused',
      description: 'All of your website traffic is proxied with Cloudflare. This ensures your website security against DDOS attacks. It also provides asset caching, worldwide CDN and best DNS management.'
    },
  ]
</script>

 <div class="benefits">

  {#each benefits as benefit}
  <div class="benefit">
    <i>
      <Icon icon="{benefit.icon}" />
    </i>
    <Subtitle above="{benefit.above}" subtitle="{benefit.title}" />
    <p class="description">
      {benefit.description}
    </p>
  </div>
  {/each}

 </div>

 <style>
  .benefits {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
  }
  .benefit {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0 0 20px 0 lightgray;
  }
  i {
    /* color: var(--primary); */
    font-size: 60px;
  }
  p {
    /* border: 1px dashed green; */
    flex: 1;
  }
  @media (min-width: 700px) {
    .benefit {
      padding: 30px;
    }
  }
 </style>