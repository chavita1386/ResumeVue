<template>
  <div id="app" class="app">
    <div id="nav" class="nav-container">
      <profile></profile>
      <Menu/>
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
import Menu from '@/components/Menu.vue';

export default {
  components: { Profile, Social, Menu },
};
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
