<template>
  <div class="about container">
    <h3 class="title">About me</h3>
    <!-- eslint-disable-next-line -->
    <p class="about__text">
      I am a passionate Senior Web Developer with 7 years of experience, I've
      worked as back-end and front-end developer, for example I've developed
      Desktop and Web apps with .NET, Java, Go, PHP. I like to develop beautiful
      websites with a great UI/UX experience design using HTML, CSS (Sass), and
      Javascript (VanillaJS, Angular, VueJS, and litle React).
    </p>
    <h3 class="title">Personal projects</h3>
    <div class="projects">
      <Card
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :url="project.url"
        :technologies="project.technologies"
        :key="project.id"
      ></Card>
    </div>
  </div>
</template>

<script>
import projects from '../repository/projects';
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>
