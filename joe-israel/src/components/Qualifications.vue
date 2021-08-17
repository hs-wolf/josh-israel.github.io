<template>
  <section class="showcase">
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
        <ul class="education">
          <li class="title t-lead">High School + Technologist</li>
          <li class="duration t-secondary"><font-awesome-icon :icon="['fas', 'calendar']" size="1x" /> From 2014 to 2017</li>
          <li class="description">
            <font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> Finished high school jointly with a Mechatronics
            Technologist degree.
          </li>
        </ul>
        <ul class="education">
          <li class="title t-lead">Computer Systems Analyst College</li>
          <li class="duration t-secondary"><font-awesome-icon :icon="['fas', 'calendar']" size="1x" /> Ongoing 2021</li>
          <li class="description">
            <font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> Currently stuying Computer Systems Analyses in a
            Brazilian College. Due in 2022.
          </li>
        </ul>
      </div>
      <div class="showcase-form grid card p-2" v-show="currentQualification === 1">
        <h2 class="t-md"><font-awesome-icon :icon="['fas', 'mouse']" size="1x" /> Courses</h2>
        <ul class="course">
          <li class="title t-lead">Udemy Courses</li>
          <li class="description">
            <font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> Finished the following courses: Git, Vue, JavaScript,
            Unity, Blender.
          </li>
        </ul>
        <ul class="course">
          <li class="title t-lead">Web Designer</li>
          <li class="description">
            <font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> Web Designer course at SESC SENAI - Brazil, 2014.
            Learned basic HTML & CSS, industry workflows, pipelines and improved my time management and team work.
          </li>
        </ul>
      </div>
      <div class="showcase-form grid card p-2" v-show="currentQualification === 2">
        <h2 class="t-md"><font-awesome-icon :icon="['fas', 'briefcase']" size="1x" /> Work</h2>
        <ul class="work">
          <li class="title t-lead">Akylla Transports, Inc</li>
          <li class="duration t-secondary"><font-awesome-icon :icon="['fas', 'calendar']" size="1x" /> From 2014 to 2015</li>
          <li class="position"><font-awesome-icon :icon="['fas', 'user-tag']" size="1x" /> Intern</li>
          <li class="description">
            <font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> Stood a full year as an intern, helping with intranet
            web updates and layout refactors. Worked mainly with HTML & CSS and a bit of JavaScript and PHP.
          </li>
        </ul>
        <ul class="work">
          <li class="title t-lead">Disbots</li>
          <li class="duration t-secondary"><font-awesome-icon :icon="['fas', 'calendar']" size="1x" /> Ongoing 2021</li>
          <li class="description">
            <font-awesome-icon :icon="['fas', 'paperclip']" size="1x" /> Currently working in a small team that develops
            Discord™ bots using the Discord™ API, NodeJS, TypeScript and MongoDB.
          </li>
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
export default defineComponent({
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
/*#region SHOWCASE */
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
/*#endregion SHOWCASE */

/*#region STATS */

/*#endregion STATS */

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  .container.grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  .selections.grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
