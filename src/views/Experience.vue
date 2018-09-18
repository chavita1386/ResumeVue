<template>
  <div class="container">
    <h3 class="title">
      <img src="../assets/experience.svg" class="icon icon--experience" /> Experience
    </h3>
    <div class="experience" v-for="job in showExperiences" :key="job.id">
      <div class="experience__info">
        <p class="experience__date">
          <span class="experience__month">
            {{job.monthStart}}
          </span>{{job.yearStart}} -
          <span class="experience__month">
            {{job.monthEnd}}
          </span>{{job.yearEnd}}
        </p>
        <p class="experience__job">{{job.job}}</p>
        <p class="experience__company">{{job.company}}</p>
      </div>
      <div class="experience__desc">
        <!-- eslint-disable-next-line -->
        {{job.description}}
      </div>
    </div>
    <div class="center">
      <button @click="showMore = !showMore" class="button button-link">
        {{showMore ? 'Back':'Next'}}
      </button>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      jobs: [
        {
          id: 1,
          job: 'Senior Web Developer',
          company: 'CRISA S.A. de C.V.',
          monthStart: 'NOV',
          monthEnd: 'JUN',
          yearStart: '2016',
          yearEnd: '2018',
          // eslint-disable-next-line
          description:
            'Development and implementation of applications with .NET, VueJS and SQL Server like purchase requests or services to automate internal processes like send invoice to clients with SQL Server. Implement web site linea-italia.com.mx with Prestashop, CentOS, PHP 7, Apache, MariaDB, CRON jobs (To back data and code), security configuration, on a Digital Ocean Server (droplet).',
        },
        {
          id: 2,
          job: 'Senior Web Developer',
          company: 'Inblay Technology',
          monthStart: 'MAR',
          monthEnd: 'JUN',
          yearStart: '2016',
          yearEnd: '2016',
          // eslint-disable-next-line
          description:
            'Creation of modules for the MSS (Material Sequencing System) system of the NISSAN company through .NET MVC, SQL Server, Javascript, HTML and CSS. Web template development with HTML, CSS and Javascript.',
        },
        {
          id: 3,
          job: 'Senior Developer',
          company: 'Sinersys',
          monthStart: 'OCT',
          monthEnd: 'DEC',
          yearStart: '2015',
          yearEnd: '2015',
          // eslint-disable-next-line
          description:
            'Fix bugs and create modules for the system TAMESIS of the NISSAN company. Improve performance of SQL Server queries. Web template development with HTML, CSS and Javascript',
        },
        {
          id: 4,
          job: 'Freelance',
          company: 'Freelance',
          monthStart: 'JAN',
          monthEnd: 'OCT',
          yearStart: '2014',
          yearEnd: '2015',
          // eslint-disable-next-line
          description:
            'Development of web page administrator, analysis and development of a financial system for a government entity of Aguascalienes, México with .NET and AngularJS, application client server to control other computers through server client.',
        },
        {
          id: 5,
          job: 'Head of System Deparment',
          company: 'H. Ayuntamiento de Aguascalientes',
          monthStart: 'JAN',
          monthEnd: 'DEC',
          yearStart: '2012',
          yearEnd: '2013',
          // eslint-disable-next-line
          description:
            'Lead the systems department to obtain an improvement in software services with around eighty systems in production, responsible for the development of the new applications generated with Java, .NET, SQL Server, PHP and Oracle.',
        },
      ],
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
