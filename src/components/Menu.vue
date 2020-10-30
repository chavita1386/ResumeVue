<template>
  <nav class="main-nav">
    <ul class="menu">
      <li class="menu__item">
        <!-- <a href="#" class="menu__link active link">ABOUT</a> -->
        <router-link to="/" class="menu__link link" exact>
          ABOUT
        </router-link>
      </li>
      <li class="menu__item">
        <!-- <a href="#" class="menu__link link">EXPERIENCE</a> -->
        <router-link to="experience" class="menu__link link" exact>
          EXPERIENCE
        </router-link>
      </li>
      <li class="menu__item">
        <router-link to="education" class="menu__link link" exact>
          EDUCATION
        </router-link>
      </li>
      <li class="menu__item">
        <router-link to="contact" class="menu__link link">
          CONTACT
        </router-link>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {

};
</script>

