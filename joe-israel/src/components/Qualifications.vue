<template>
  <section id="qualifications" class="showcase">
    <div class="container grid">
      <div class="showcase-text">
        <h1 class="t-lg">Qualifications Tree</h1>
        <p class="t-lead py-2">These are all of my acquired qualifications untill <strong>August 2021.</strong></p>
        <div class="selections grid grid-3">
          <a @click="setEducation" class="btn btn-outline">Education</a>
          <a @click="setCourses" class="btn btn-outline">Courses</a>
          <a @click="setWork" class="btn btn-outline">Work</a>
        </div>
      </div>
      <div class="showcase-form grid card p-2" v-show="currentQualification === 0">
        <h2 class="t-md"><font-awesome-icon :icon="['fas', 'university']" size="1x" /> Education</h2>
        <ul class="education" v-for="education in educationList" :key="education.id">
          <li class="title t-lead">{{ education.title }}</li>
          <li class="duration t-secondary">
            <font-awesome-icon :icon="['fas', 'calendar']" size="1x" /> {{ education.duration }}
          </li>
          <li class="description"><font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> {{ education.description }}</li>
        </ul>
      </div>
      <div class="showcase-form grid card p-2" v-show="currentQualification === 1">
        <h2 class="t-md"><font-awesome-icon :icon="['fas', 'mouse']" size="1x" /> Courses</h2>
        <ul class="course" v-for="course in courseList" :key="course.id">
          <li class="title t-lead">{{ course.title }}</li>
          <li class="description"><font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> {{ course.description }}</li>
        </ul>
      </div>
      <div class="showcase-form grid card p-2" v-show="currentQualification === 2">
        <h2 class="t-md"><font-awesome-icon :icon="['fas', 'briefcase']" size="1x" /> Work</h2>
        <ul class="work" v-for="work in workList" :key="work.id">
          <li class="title t-lead">{{ work.title }}</li>
          <li class="duration t-secondary"><font-awesome-icon :icon="['fas', 'calendar']" size="1x" /> {{ work.duration }}</li>
          <li class="position"><font-awesome-icon :icon="['fas', 'user-tag']" size="1x" /> {{ work.position }}</li>
          <li class="description"><font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> {{ work.description }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="stats my-4">
    <div class="container">
      <p class="t-lead t-center">
        <font-awesome-icon :icon="['fas', 'quote-left']" size="1x" /> Work smarter, not harder.
        <font-awesome-icon :icon="['fas', 'quote-right']" size="1x" />
      </p>
      <p class="t-sm t-center"><i>Allen F. Morgenstern.</i></p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IEducation, ICourses, IWork } from '@/types/Qualificatios';

export default defineComponent({
  name: 'Qualifications',
  setup() {
    const educationList: IEducation[] = [
      {
        id: '1',
        title: 'High School + Technologist',
        duration: 'From 2014 to 2017',
        description: 'Finished high school jointly with a Mechatronics Technologist degree.',
      },
      {
        id: '2',
        title: 'Computer Systems Analyst College',
        duration: 'Ongoing 2021',
        description: 'Currently stuying Computer Systems Analyses in a Brazilian College. Due in 2022.',
      },
    ];
    const courseList: ICourses[] = [
      {
        id: '1',
        title: 'Udemy Courses',
        description: 'Finished the following courses: Git, Vue, JavaScript, Unity, Blender.',
      },
      {
        id: '2',
        title: 'Web Designer',
        description:
          'Web Designer course at SESC SENAI - Brazil, 2014. Learned basic HTML & CSS, industry workflows, pipelines and improved my time management and team work.',
      },
    ];
    const workList: IWork[] = [
      {
        id: '1',
        title: 'Disbots',
        duration: 'Ongoing 2021',
        position: 'Project Lead',
        description:
          'Currently working in a small team that develops Discord™ bots using the Discord™ API, NodeJS, TypeScript and MongoDB.',
      },
    ];

    return { educationList, courseList, workList };
  },
  data() {
    const currentQualification = 0;

    return { currentQualification };
  },
  methods: {
    setEducation() {
      this.currentQualification = 0;
    },
    setCourses() {
      this.currentQualification = 1;
    },
    setWork() {
      this.currentQualification = 2;
    },
  },
});
</script>

<style>
.showcase {
  height: auto;
  background-color: var(--primary-color);
  color: var(--light-text);
  position: relative;
}

.container.grid {
  align-items: flex-start;
  gap: 4rem;
}

.showcase-form {
  overflow: hidden;
  z-index: 1;
}

.showcase-form.grid {
  grid-template-columns: repeat(1, 1fr);
}

.showcase::before,
.showcase::after {
  content: '';
  position: absolute;
  height: 100px;
  bottom: -70px;
  right: 0;
  left: 0;
  background-color: var(--light-color);
  transform: skewY(-2deg);
  -webkit-transform: skewY(-2deg);
  -moz-transform: skewY(-2deg);
  -ms-transform: skewY(-2deg);
}

.education .title,
.course .title,
.work .title {
  font-weight: bold;
}

.education .duration,
.work .duration,
.work .position {
  font-weight: bold;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
  .container.grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  .selections.grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
}
</style>
