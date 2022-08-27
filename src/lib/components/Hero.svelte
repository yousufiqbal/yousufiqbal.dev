<script>
  import Button from "./Button.svelte";
  import Container from "./Container.svelte";
  import Icon from '@iconify/svelte'
</script>

<div class="hero-wrapper">

    <div class="hero">

      <div class="left">
        <div class="avatar"></div>
      </div>

      <div class="right">
        <div class="title">
          <div class="above">Assalam-u-Alaekum</div>
          <h1>I'm <span>Yosof,</span></h1>
        </div>
        <p class="introduction">
          Using modern and cutting-edge technologies, I <em>design</em> and <em>develop</em> websites that are responsive, sleek, performant and SEO friendly. I do:
        </p>
        <div class="services">
          <div>
            <i><Icon icon="ri:check-line" /></i>
            Personal Website
          </div>
          <div>
            <i><Icon icon="ri:check-line" /></i>
            Company & Business Website
          </div>
          <div>
            <i><Icon icon="ri:check-line" /></i>
            Design Files to live website
          </div>
        </div>
        <div class="buttons">
          <Button name="See Designs" icon="ri:arrow-right-s-line" type="secondary" />
          <Button name="Hire Me" icon="ri:arrow-right-up-line" type="outline" />
        </div>
      </div>

    </div>

</div>

<style>
  .hero-wrapper {
    /* border: 1px dashed red; */
    display: grid;
    place-items: center;
    margin-bottom: 50px;
    /* height: calc(100vh - 100px); */
  }
  .hero {
    display: grid;
    justify-content: center;
    /* border: 1px dashed red; */
    gap: 30px;
    /* max-width: 350px; */
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
    background-image: url('/avatar.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    /* border: 1px solid orange; */
  }
  .title {
    display: grid;
    justify-items: center;
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
    max-width: 350px;
    /* border: 1px dashed red; */
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
      margin-top: 40px;
      justify-items: center;
      grid-template-columns: auto 1fr;
      gap: 80px;
    }
    .left {
      align-self: center;
    }
    .right, .title {
      justify-items: left;
    }
    .introduction {
      text-align: left;
    }
  }
  @media (min-width: 1000px) {
    .avatar {
      /* border: 1px solid red; */
      width: 200px;
      height: 200px;
    }
  }
</style>