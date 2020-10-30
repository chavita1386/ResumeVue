<template>
  <div class="container">
    <h3 class="title center">
      Experience
    </h3>
    <div class="experience" v-for="job in showExperiences" :key="job.id">
      <div class="experience__info">
        <p class="experience__job">{{job.job}}</p>
        <p class="experience__date">
          <span class="experience__month"> {{job.monthStart}} </span
          >{{job.yearStart}} -
          <span class="experience__month"> {{job.monthEnd}} </span
          >{{job.yearEnd}}
        </p>

        <p class="experience__company">{{job.company}}</p>
      </div>
      <div class="experience__desc">
        <!-- eslint-disable-next-line -->
        {{job.description}}
      </div>
    </div>
    <div class="right">
      <button @click="showMore = !showMore" class="button button-link">
        {{showMore ? 'Back':'Next'}}
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import jobs from '../repository/jobs';

export default {
  data() {
    return {
      showMore: false,
      jobs,
    };
  },
  computed: {
    showExperiences() {
      return this.jobs.filter((job) => {
        if (this.showMore) {
          return job.id > 3;
        }
        return job.id <= 3;
      });
    },
  },
};
</script>
