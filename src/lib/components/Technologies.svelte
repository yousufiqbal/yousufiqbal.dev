<script>
import Icon from "@iconify/svelte";

import Card from "./Card.svelte";

  export let technologies = [
    {
      // icon: 'ri:html5-line',
      name: 'HTML',
      description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      // icon: 'ri:css3-line',
      name: 'CSS',
      description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
    },
    {
      // icon: 'teenyicons:javascript-outline',
      name: 'JavaScript',
      description: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
    },
    {
      // icon: 'teenyicons:nodejs-outline',
      name: 'NodeJS',
      description: 'Node.js is an open-source JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser.',
    },
    {
      // icon: 'fontisto:mysql',
      name: 'MySQL',
      description: 'MySQL is an open-source relational database management system. As with other relational databases, MySQL stores data in tables made up of rows and columns.',
    },
    {
      // icon: 'teenyicons:svelte-solid',
      name: 'SvelteJS',
      description: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step.',
    },
    {
      // icon: 'teenyicons:svelte-solid',
      name: 'SvelteKit',
      description: 'SvelteKit doesn\'t compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.',
    },
    {
      // icon: 'cib:visual-studio-code',
      name: 'VS Code',
      description: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js',
    },
  ]
</script>

<div class="technologies">

  {#each technologies as technology}
  <Card>

    <div class="technology">
      <!-- <i><Icon icon={technology.icon} /></i> -->
      <h3 class="name">{technology.name}</h3>
      <p class="description">
        {technology.description}
      </p>
    </div>

  </Card>
  {/each}

</div>

<style>
  .technologies {
    /* border: 1px dashed red; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 50px;
    margin-bottom: 80px;
  }
  .technology {
    /* border: 1px dashed blue; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    /* line-height: 1; */
  }
  /* i {
    color: var(--primary);
    font-size: 60px;
  } */
  p {
    /* border: 1px dashed green; */
    flex: 1;
    /* margin-bottom: 15px; */
  }
</style>