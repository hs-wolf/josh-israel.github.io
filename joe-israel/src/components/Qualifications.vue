<template>
  <section class="showcase">
    <div class="container grid">
      <div class="showcase-text">
        <h1>Easier Deployment</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium esse rerum officiis dolorem obcaecati!</p>
        <a href="#" class="btn btn-outline">Read More</a>
      </div>
      <div class="showcase-form card">
        <h2>Request a Demo</h2>
        <form>
          <div class="form-control">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div class="form-control">
            <input type="text" name="company" placeholder="Company Name" required />
          </div>
          <div class="form-control">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="submit" value="Send" class="btn btn-primary" />
        </form>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="container">
      <h3 class="stats-heading text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, iste.</h3>
      <div class="grid grid-3 text-center my-4">
        <div>
          <font-awesome-icon :icon="['fas', 'server']" size="3x" />
          <h3>10,349,405</h3>
          <p class="text-secondary">Deployments</p>
        </div>
        <div>
          <font-awesome-icon :icon="['fas', 'upload']" size="3x" />
          <h3>987 TB</h3>
          <p class="text-secondary">Published</p>
        </div>
        <div>
          <font-awesome-icon :icon="['fas', 'project-diagram']" size="3x" />
          <h3>2,343,265</h3>
          <p class="text-secondary">Projects</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
/*#region SHOWCASE */
.showcase {
  height: 400px;
  background-color: var(--primary-color);
  color: var(--light-text);
  position: relative;
}

.showcase h1 {
  font-size: 40px;
}

.showcase p {
  margin: 20px 0;
}

.showcase .grid {
  grid-template-columns: 55% 45%;
  gap: 30px;
  overflow: visible;
}

.showcase-form {
  position: relative;
  top: 60px;
  width: 400px;
  height: 350px;
  padding: 40px;
  z-index: 100;
  justify-self: flex-end;
}

.showcase-form .form-control {
  margin: 30px 0;
}

.showcase-form input[type='text'],
.showcase-form input[type='email'] {
  border: 0;
  border-bottom: 1px #b4becb solid;
  width: 100%;
  padding: 3px;
  font-size: 16px;
}

.showcase-form input:focus {
  outline: none;
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
/*#endregion SHOWCASE */

/*#region STATS */
.stats {
  padding-top: 100px;
}

.stats-heading {
  max-width: 500px;
  margin: 1rem auto;
}

.stats .grid h3 {
  font-size: 35px;
}

.stats .grid p {
  font-size: 20px;
  font-weight: bold;
}
/*#endregion STATS */

/* FOR TABLETS AND SMARTPHONES */
@media (max-width: 768px) {
  .showcase .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .showcase {
    height: auto;
  }

  .showcase-text {
    text-align: center;
    margin-top: 40px;
  }

  .showcase-form {
    justify-self: center;
    margin: auto;
  }
}

/*FOR SMARTPHONES ONLY */
@media (max-width: 500px) {
  .showcase-form {
    width: 100%;
  }
}
</style>
