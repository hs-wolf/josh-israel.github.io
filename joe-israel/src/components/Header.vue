<template>
  <header id="home">
    <div class="container flex t-center">
      <h1 class="flex t-md">
        <p>Howdy,</p>
        <p class="t-primary">&nbsp;{{ name }}&nbsp;</p>
        <p>here</p>
      </h1>
      <img class="my-4" src="@/assets/images/profile.jpg" alt="Profile Picture" />
      <p class="t-lead">
        I'm a Junior Web Developer.<br />
        Tenacious, curious and always craving for new work experiences.
      </p>
      <div class="social flex my-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          v-for="social in socials"
          :key="social.id"
          :href="social.link"
          :title="social.title"
          :download="social.id === '4' ? 'jose-israel-cv' : null"
          ><font-awesome-icon :icon="[social.icon[0], social.icon[1]]" size="3x"
        /></a>
      </div>
      <div class="indicator p-2 flex">
        <font-awesome-icon :icon="['fas', 'mouse']" size="2x" />
        <p class="p-1">Scroll Down</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ISocials from '@/types/Socials';

export default defineComponent({
  name: 'Header',
  setup() {
    const publicPath: string = process.env.NODE_ENV === 'production' ? '/' : '/';
    const name = '<Joe>';
    const socials: ISocials[] = [
      {
        id: '1',
        link: 'https://www.linkedin.com/in/unobraid/',
        title: 'LinkedIn',
        icon: ['fab', 'linkedin'],
      },
      {
        id: '2',
        link: 'https://github.com/joe-israel',
        title: 'GitHub',
        icon: ['fab', 'github'],
      },
      {
        id: '3',
        link: 'https://stackoverflow.com/users/14956131/unobraid',
        title: 'Stack Overflow',
        icon: ['fab', 'stack-overflow'],
      },
      {
        id: '4',
        link: `${publicPath}jose-israel-cv.pdf`,
        title: 'Curriculum Vitae',
        icon: ['fas', 'file-download'],
      },
    ];

    return { name, socials };
  },
});
</script>

<style scoped>
header {
  min-height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/circuit.jpg');
  background-size: 100%;
  position: relative;
}

header .container.flex {
  flex-direction: column;
}

header h1.flex {
  flex-direction: row;
}

header img {
  width: 300px;
  border-radius: 50% 50% 5% 50%;
  box-shadow: 0 0px 8px rgb(0, 0, 0, 0.25);
}

header .social {
  height: 4rem;
  opacity: 0.4;
}

header .social a {
  margin: 0 1rem;
  transition: font-size 0.2s ease;
}

header .social a:hover {
  font-size: 1.1rem;
}

header .indicator.flex {
  flex-direction: row;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  header img {
    width: 240px;
  }
}
</style>
