<script>
  import Button from "./Button.svelte";
  import Icon from '$lib/components/Icon.svelte'
  import { onMount } from "svelte";

  let salam = 'Assalam-u-Alaekum', typed = ''

  onMount(() => {
    startTypewriter()
  })

  const startTypewriter = () => {
    let index = 0
    let interval = setInterval(() => {
      typed += salam[index]
      index++
      if (index == salam.length) clearInterval(interval)
    }, 100)
  }
</script>

<div class="hero-wrapper">

    <div class="hero">

      <div class="left">
        <div class="avatar"></div>
      </div>

      <div class="right">
        <div class="title">
          <div class="above">{typed}</div>
          <h1>I'm <span>Yousuf,</span></h1>
        </div>
        <p class="introduction">
          Using modern technologies, I <em>design</em> and <em>develop</em> websites that are fast, responsive,  and SEO friendly just like this website. I develop:
        </p>
        <div class="services">
          <div>
            <i><Icon icon="ri:check-line" /></i>
            Personal Websites
          </div>
          <div>
            <i><Icon icon="ri:check-line" /></i>
            Company & Business Websites
          </div>
          <div>
            <i><Icon icon="ri:check-line" /></i>
            Design Files To Live Websites
          </div>
        </div>
        <div class="buttons">
          <Button name="See Templates" href="/templates" icon="ri:arrow-right-s-line" type="secondary" />
          <Button name="Hire Me" href="/contact" icon="ri:arrow-right-up-line" type="ghost" />
        </div>
      </div>

    </div>

</div>

<style>
  .hero-wrapper {
    /* border: 1px dashed red; */
    display: grid;
    place-items: center;
    /* margin-bottom: 50px; */
  }
  .hero {
    display: grid;
    justify-content: center;
    /* border: 1px dashed blue; */
    gap: 30px;
    margin: 0 auto;
    padding: 50px 0;
    /* height: 100vh; */
  }
  .left {
    display: grid;
    /* border: 1px dashed red; */
    justify-content: center;
  }
  .avatar {
    border-radius: 40%;
    width: 170px; height: 170px;
    background-color: lightgray;
    background-image: url('/avatar.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    /* border: 1px solid orange; */
  }
  .title {
    display: grid;
    /* justify-items: center; */
    /* border: 1px dashed red; */
  }
  .above {
    color: var(--above-below);
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
  }
  h1 span {
    color: var(--primary);
  }
  .right {
    display: grid;
    justify-items: center;
    gap: 20px;
    /* border: 1px dashed green; */
  }
  .introduction {
    text-align: center;
    max-width: 290px;
    /* border: 1px dashed red; */
    /* padding: 0 10px; */
  }
  .buttons {
    display: flex;
    gap: 20px;
    /* border: 1px dashed red; */
  }
  .services {
    text-transform: capitalize;
    /* border: 1px dashed red; */
    display: grid;
    gap: 4px;
    margin-bottom: 10px;
  }
  .services i {
    font-size: 22px;
    color: var(--primary);
  }
  .services > div {
    /* border: 1px dashed blue; */
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (min-width: 700px) {
    .hero {
      grid-template-areas: 'left right';
      /* margin-top: 40px; */
      justify-items: center;
      grid-template-columns: auto 1fr;
      gap: 100px;
      padding: auto 20px;
    }
    .left {
      grid-area: right;
      align-self: center;
    }
    .avatar {
      transform: scaleX(-1);
    }
    .right {
      grid-area: left;
    }
    .right, .title {
      justify-items: left;
    }
    .introduction {
      text-align: left;
      max-width: 400px;
    }
  }
  @media (min-width: 1000px) {
    .hero {
      gap: 150px;

    }
    .avatar {
      /* border: 1px solid red; */
      width: 250px;
      height: 250px;
    }
  }
</style>