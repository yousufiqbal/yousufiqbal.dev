<script>
  import Content from "./Content.svelte";
  import Subtitle from "./Subtitle.svelte";

  export let price
</script>

<Subtitle above="Clarity" subtitle="Limitations" />
<Content>
  <ol>
    <li>Each page has a limit of 4 sections per page</li>
    <li>When pages limit surpass, subsequent pages will be charged $&nbsp;{price}.00 per page</li>
    <li>Free email is for one account only</li>
    <li>Contact Form is a page where users interested can send you a message. You receive this message inside your custom domain email which is provided for free. (Not included in the basic plan)</li>
    <li>Free hosting, email and SSL certificates are vendors supplied. If one vendor abandon them, I'll switch to second and so on. If all of the vendors anandon them. Then I've no choice but to shift you to a paid plan for hosting / email / SSL after consultation from you.</li>
    <li>The template you chose for the design of your website is copyrighted artwork which means you cannot sell template design to someone else. If you want template ownership, contact me and I can design one for you on your ownership, but this increases pricing.</li>
    <li>The build generated from your website source code is completely yours. You are its owner, but the source code isn’t. There is not much of a need for common users to buy source code. But still, if you want to buy source code and own it. You can contact me.
    </li>
  </ol>
</Content>