<template>
  <div class="card">
    <img :src="getImgUrl" />
    <a :href="url" target="_blank">
      <h4 class="card__title">{{title}}</h4>
    </a>
    <p class="card__description">{{description}}</p>
    <div class="card__technologies">
      <span v-for="technology in technologies" :key="technology">{{technology}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image', 'description', 'technologies', 'url'],
  computed: {
    getImgUrl() {
      /* eslint-disable-next-line */
      return require(`../assets/projects/${this.image}`);
    },
  },
};
</script>
