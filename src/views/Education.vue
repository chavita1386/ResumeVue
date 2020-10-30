<template>
  <div class="education container">
    <div class="education-courses">
      <h3 class="title">
        Education
      </h3>
      <!-- eslint-disable-next-line -->
      <div class="education__course" v-for="education in educations" :key="education.id">
        <h5 class="education__title">{{education.title}}</h5>
        <h6 class="education__school">
          {{education.school}}
        </h6>
        <p class="education__time">{{education.time}}</p>
      </div>
    </div>
    <div class="education-skills">
      <h3 class="title">
        <span>Skills</span>
        <select v-model="filterSkill"
                name="filterSkills"
                id="filterSkills"
                class="filterSkills">
          <option value="Frontend" selected>Frontend</option>
          <option value="Backend" selected>Backend</option>
          <option value="Database" selected>Database</option>
          <option value="Other" selected>Other</option>
        </select>
      </h3>
      <div class="skill" v-for="skill in showSkills" :key="skill.id">
        <h5 class="skill__name">{{skill.name}}</h5>
        <!-- eslint-disable-next-line -->
        <div class="skill__percentage" :class="'percentage-' +skill.percentage"></div>
      </div>
    </div>
  </div>
</template>

<script>
import courses from '../repository/courses';
import skills from '../repository/skills';

export default {
  data() {
    return {
      filterSkill: 'Frontend',
      educations: courses,
      skills,
    };
  },
  computed: {
    showSkills() {
      return this.skills.filter(skill => skill.type === this.filterSkill);
    },
  },
};
</script>
