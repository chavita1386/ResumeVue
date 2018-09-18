<template>
  <div id="app" class="app">
    <div id="nav" class="nav-container">
      <profile></profile>
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
            <router-link to="contact"
              class="menu__link link">
              CONTACT
            </router-link>
          </li>
        </ul>
      </nav>
      <social></social>
    </div>
    <!-- <div class="content"> -->
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    <!-- </div> -->
    <div class="nav-mobile" style="height:50px;">
      <div class="menu-mobile__item">
        <router-link to="/" class="menu-mobile__link" exact>
          <img src="./assets/about_menu.svg"
              alt="About" class="menu-mobile__icon">
          <span class="menu-mobile__title">
            About
          </span>
        </router-link>
      </div>
      <div class="menu-mobile__item">
        <router-link to="experience" class="menu-mobile__link" exact>
          <img src="./assets/experience_2.svg"
                alt="Experience" class="menu-mobile__icon">
          <span class="menu-mobile__title">
            Experience
          </span>
        </router-link>
      </div>
      <div class="menu-mobile__item">
        <router-link to="education" class="menu-mobile__link" exact>
          <img src="./assets/hat_2.svg"
              alt="Education" class="menu-mobile__icon">
          <span class="menu-mobile__title">
            Education
          </span>
        </router-link>
      </div>
      <div class="menu-mobile__item">
        <router-link to="contact" class="menu-mobile__link" exact>
          <img src="./assets/contact.svg"
               alt="Contact" class="menu-mobile__icon">
          <span class="menu-mobile__title">
            Contact
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import Social from '@/components/Social.vue';

export default {
  components: { Profile, Social },
};
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
