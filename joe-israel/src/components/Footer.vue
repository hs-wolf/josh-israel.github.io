<template>
  <footer class="footer bg-dark">
    <div class="container flex py-5">
      <div>
        <h1>Joe/José Israel</h1>
        <p>Copyright © 2021</p>
      </div>

      <div class="social flex text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          v-for="social in socials"
          :key="social.id"
          :href="social.link"
          :title="social.title"
          :download="social.id === '4' ? 'jose-israel-cv' : null"
          ><font-awesome-icon :icon="[social.icon[0], social.icon[1]]" size="2x"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ISocials from '@/types/Socials';

export default defineComponent({
  name: 'Footer',
  setup() {
    const publicPath: string = process.env.NODE_ENV === 'production' ? '/' : '/';
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

    return { socials };
  },
});
</script>

<style>
.footer a {
  color: var(--light-text);
}

.container.flex {
  justify-content: space-between;
}

.footer .social.flex {
  width: auto;
}

.footer .social a {
  margin: 0 1rem;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  .container.flex {
    flex-direction: column;
  }

  .footer .social {
    margin-top: 3rem;
  }
}
</style>
