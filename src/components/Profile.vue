<template>
  <div class="profile">
    <h2 class="profile__name">SALVADOR</h2>
    <h2 class="profile__lastname">ROCHA ROBLEDO</h2>
    <h3 class="profile__job">Web Developer</h3>
    <!-- eslint-disable-next-line -->
    <div class="profile__logo">
      <img
        class="profile__photo"
        src="../assets/profile.png"
        alt="Salvador Rocha"
      />
      <img
        class="profile__character"
        src="../assets/character.svg"
        alt="Chavita"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
