<template>
  <div class="education container">
    <div class="education-courses">
      <h3 class="title">
        <img src="../assets/hat.svg" class="icon icon--education" /> Education
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
        <img src="../assets/skills.svg" class="icon icon--skill" /> Skills
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
export default {
  data() {
    return {
      filterSkill: 'Frontend',
      educations: [
        {
          id: 1,
          title: 'Microsoft Sharepoint 2007',
          school: 'Certified',
          time: '2012',
        },
        {
          id: 2,
          title: 'CMMI v1.3',
          school: 'Certified',
          time: '2012',
        },
        {
          id: 3,
          title: 'ITIL v3',
          school: 'Certified',
          time: '2011',
        },
        {
          id: 4,
          title: 'Java JSP, Oracle PL/SQL',
          school: 'Course',
          time: '2011',
        },
        {
          id: 5,
          title: 'Computer engineer',
          school: 'INSTITUTO TECNOLÓGICO DE AGUASCALIENTES',
          time: '2004-2010',
        },
      ],
      skills: [
        {
          id: 1,
          name: 'HTML',
          type: 'Frontend',
          percentage: 90,
        },
        {
          id: 2,
          name: 'CSS',
          type: 'Frontend',
          percentage: 90,
        },
        {
          id: 3,
          name: 'Javascript',
          type: 'Frontend',
          percentage: 85,
        },
        {
          id: 4,
          name: 'VueJs',
          type: 'Frontend',
          percentage: 80,
        },
        {
          id: 5,
          name: 'Angular',
          type: 'Frontend',
          percentage: 60,
        },
        {
          id: 6,
          name: 'React',
          type: 'Frontend',
          percentage: 40,
        },
        {
          id: 7,
          name: 'Microsoft .NET (C#)',
          type: 'Backend',
          percentage: 90,
        },
        {
          id: 8,
          name: 'Java',
          type: 'Backend',
          percentage: 70,
        },
        {
          id: 9,
          name: 'Python',
          type: 'Backend',
          percentage: 40,
        },
        {
          id: 10,
          name: 'Go',
          type: 'Backend',
          percentage: 60,
        },
        {
          id: 11,
          name: 'PHP',
          type: 'Backend',
          percentage: 70,
        },
        {
          id: 12,
          name: 'Microsoft SQL Server',
          type: 'Database',
          percentage: 75,
        },
        {
          id: 13,
          name: 'Oracle',
          type: 'Database',
          percentage: 45,
        },
        {
          id: 14,
          name: 'MongoDB',
          type: 'Database',
          percentage: 35,
        },
        {
          id: 15,
          name: 'MySQL (MariaDB)',
          type: 'Database',
          percentage: 75,
        },
        {
          id: 16,
          name: 'SASS (SCSS)',
          type: 'Other',
          percentage: 85,
        },
        {
          id: 17,
          name: 'PUG',
          type: 'Other',
          percentage: 55,
        },
        {
          id: 18,
          name: 'Typescript',
          type: 'Other',
          percentage: 40,
        },
        {
          id: 19,
          name: 'NodeJs',
          type: 'Backend',
          percentage: 65,
        },
      ],
    };
  },
  computed: {
    showSkills() {
      return this.skills.filter(skill => skill.type === this.filterSkill);
    },
  },
};
</script>
