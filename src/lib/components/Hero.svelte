<script>
  import Button from "$lib/components/Button.svelte";

  let salam = 'Assalam-u-Alaekum'
</script>

<section>
  <div class="container">
    <div class="hero">

      <div class="left">
        <div class="avatar"></div>
      </div>

      <div class="right">
        <div class="title">
          <div class="above">{salam}</div>
          <h1>I'm <span>Yousuf,</span></h1>
        </div>
        <p class="introduction">
          I'm an <em>IBM</em> © Certified Full Stack Software Developer & <em>Google</em> © Certified UX Designer. My services include:
        </p>
        <div class="services">
          <div>
            <i><span class="i-ri:check-double-line"></span></i>
            E-Commerce Websites
          </div>
          <div>
            <i><span class="i-ri:check-double-line"></span></i>
            Design Files to Website
          </div>
          <!-- <div>
            <i><span class="i-ri:check-double-line"></span></i>
            Personal / Business Websites
          </div> -->
          <div>
            <i><span class="i-ri:check-double-line"></span></i>
            Course Training Websites
          </div>
          <div>
            <i><span class="i-ri:check-double-line"></span></i>
            Custom Web Apps & More
          </div>
        </div>

        <div class="buttons">
          <Button name="See Services" href="/services" icon="i-ri:arrow-right-s-line" type="primary" />
          <Button name="Hire Me" href="/contact" icon="i-ri:arrow-right-up-line" type="ghost" />
        </div>

      </div>

    </div>
  </div>
</section>

<style>
  section {
    /* background-color: var(--surface); */
    /* border: 1px dashed red; */
    display: grid;
    place-items: center;
    /* margin-bottom: 50px; */
    border-bottom: 1px solid var(--border);
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
    box-shadow: var(--shadow);
    /* border: 1px solid gray; */
  }
  .title {
    display: grid;
    /* justify-items: center; */
    /* border: 1px dashed red; */
  }
  .above {
    text-align: center;
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
    max-width: 300px;
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
    .above {
      text-align: left;
    }
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