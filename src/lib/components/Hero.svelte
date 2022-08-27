<script>
import Button from "./Button.svelte";
import Container from "./Container.svelte";
import Icon from '@iconify/svelte'
</script>
<div class="hero-wrapper">
  <Container> 

    <div class="hero">

      <div class="left">
        <div class="avatar"></div>
      </div>

      <div class="right">
        <div class="title">
          <div class="above">Assalam-u-Alaekum</div>
          <h1>Hi! I’m <span>Yousuf,</span></h1>
        </div>
        <p class="introduction">
          Using modern and cutting-edge technologies, I <em>design</em> and <em>develop</em> websites that are responsive, sleek, performant and SEO friendly.
        </p>
        <div class="services">
          <div><Icon color="var(--success)" icon="ri:check-line" />Personal Website</div>
          <div><Icon color="var(--success)" icon="ri:check-line" />Company & Business Website</div>
          <div><Icon color="var(--success)" icon="ri:check-line" />Design Files to live website</div>
        </div>
        <div class="buttons">
          <Button name="See Designs" icon="ri:arrow-right-s-line" />
          <Button name="Hire Me" icon="ri:arrow-right-up-line" />
        </div>
      </div>

    </div>

  </Container>
</div>

<style>
  .hero {
    display: grid;
    border: 1px dashed red;
    gap: 40px;
    /* height: 100vh; */
  }
  .left {
    display: grid;
    border: 1px dashed red;
    justify-content: center;
  }
  .avatar {
    border-radius: 40%;
    width: 200px; height: 200px;
    background-image: url(/avatar.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    border: 1px solid orange;
  }
  .title {
    border: 1px dashed red;
  }
  .above {
    color: var(--above-below);
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
  h1 span {
    color: var(--primary);
  }
  .right {
    display: grid;
    gap: 10px;
    border: 1px dashed green;
  }
  .buttons {
    display: flex;
    gap: 20px;
    border: 1px dashed red;
  }
  .services {
    border: 1px dashed red;
    display: grid;
    margin-bottom: 20px;
  }
  .services > div {
    border: 1px dashed blue;
    display: flex;
    align-items: center;
    gap: 7px;
  }
</style>