<template>
  <section id="skills" class="skills bg-primary">
    <div class="container flex">
      <div class="skills-text">
        <h1 class="t-lg">Honed Skills</h1>
        <p class="my-2">
          This is the set of skills that I've been improving for the last few years. Languages, frameworks, programs and more.
        </p>
      </div>
      <div class="skills-list grid t-center">
        <div class="card flex" v-for="skill in skills" :key="skill.id">
          <img :src="skill.img" :alt="skill.title" />
          <h4>{{ skill.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ISkills from '@/types/Skills';

export default defineComponent({
  name: 'Skills',
  setup() {
    const skills: ISkills[] = [
      {
        id: '1',
        title: 'Vue 3',
        img: require('@/assets/images/vue.png'),
      },
      {
        id: '2',
        title: 'Node JS',
        img: require('@/assets/images/node.png'),
      },
      {
        id: '3',
        title: 'JavaScript',
        img: require('@/assets/images/javascript.png'),
      },
      {
        id: '4',
        title: 'TypeScript',
        img: require('@/assets/images/typescript.png'),
      },
      {
        id: '5',
        title: 'HTML5',
        img: require('@/assets/images/html.png'),
      },
      {
        id: '6',
        title: 'CSS3',
        img: require('@/assets/images/css.png'),
      },
      {
        id: '7',
        title: 'CSharp',
        img: require('@/assets/images/csharp.png'),
      },
      {
        id: '8',
        title: 'Team Work',
        img: require('@/assets/images/team.png'),
      },
    ];

    return { skills };
  },
});
</script>

<style scoped>
.skills {
  position: relative;
}

.skills .skills-text {
  margin-right: 2rem;
}

.skills .skills-list {
  z-index: 1;
}

.skills .skills-list.grid {
  grid-template-columns: repeat(3, 1fr);
}

.skills .skills-list .card {
  transition: transform 0.2s ease;
  overflow: hidden;
}

.skills .skills-list .card:hover {
  transform: translateY(-4px);
}

.skills .skills-list .card.flex {
  flex-direction: column;
  justify-content: center;
}

.skills::before,
.skills::after {
  content: '';
  position: absolute;
  height: 5rem;
  bottom: -2rem;
  right: 0;
  left: 0;
  background-color: var(--light-color);
  transform: skewY(2deg);
  -webkit-transform: skewY(2deg);
  -moz-transform: skewY(2deg);
  -ms-transform: skewY(2deg);
}

.skills .skills-list .card.flex img {
  display: block;
  width: 64px;
  margin: 0.5rem 0;
}

.skills .skills-list .card.flex h4 {
  white-space: nowrap;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
  .skills .skills-list.grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .container.flex {
    flex-direction: column;
  }
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  .skills .skills-list.grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills .skills-list .card.flex {
    flex-direction: row;
    justify-content: left;
  }

  .skills .skills-list .card.flex img {
    display: block;
    width: 20px;
    margin: 0.5rem 0.3rem 0.5rem 0;
  }
}
</style>
